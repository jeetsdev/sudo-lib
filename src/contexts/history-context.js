import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useReducer } from "react";
import { ACTION_TYPE, historyReducer } from "../reducers";
import { useAuth } from "./auth-context";

// context here
const HistoryContext = createContext();
export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
	const { authToken } = useAuth();
	const {
		GET_HISTORY_VIDEOS,
		ADD_TO_HISTORY,
		REMOVE_FROM_HISTORY,
		CLEAR_ALL_HISTORY,
	} = ACTION_TYPE;
	const [state, dispatch] = useReducer(historyReducer, {
		historyVideos: [],
	});

	//Initially gtting history videos here
	useEffect(() => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.get("api/user/history", {
						headers: {
							authorization: authToken,
						},
					});
					const {
						status,
						data: { history },
					} = res;

					if (status === 200) {
						dispatch({
							type: GET_HISTORY_VIDEOS,
							payload: history,
						});
					}
				})();
			} catch (error) {
				toast.error("Some error occured.");
			}
		}
	}, [authToken, GET_HISTORY_VIDEOS]);

	// Add to history videos handler
	const addToHistory = async (video) => {
		try {
			const res = await axios.post(
				"/api/user/history",
				{
					video: video,
				},
				{
					headers: {
						authorization: authToken,
					},
				},
			);

			const {
				status,
				data: { history },
			} = res;
			if (status === 201) {
				dispatch({ type: ADD_TO_HISTORY, payload: history });
			}
		} catch (error) {}
	};

	// Remove from history videos handler
	const removeFromHistory = async (video) => {
		try {
			const res = await axios.delete(`/api/user/history/${video._id}`, {
				headers: {
					authorization: authToken,
				},
			});
			const {
				status,
				data: { history },
			} = res;
			if (status === 200) {
				toast.success("Removed from history videos.");
				dispatch({
					type: REMOVE_FROM_HISTORY,
					payload: history,
				});
			}
		} catch (error) {
			toast.error("Some error occured.");
		}
	};

	// Remove from history videos handler
	const clearAllHistory = async () => {
		try {
			const res = await axios.delete(`/api/user/history/all`, {
				headers: {
					authorization: authToken,
				},
			});
			const {
				status,
				data: { history },
			} = res;
			if (status === 200) {
				toast.success("History cleared.");
				dispatch({
					type: CLEAR_ALL_HISTORY,
					payload: history,
				});
			}
		} catch (error) {
			toast.error("Some error occured.");
		}
	};

	return (
		<HistoryContext.Provider
			value={{
				historyState: state,
				historyDispatch: dispatch,
				addToHistory,
				removeFromHistory,
				clearAllHistory,
			}}>
			{children}
		</HistoryContext.Provider>
	);
};
