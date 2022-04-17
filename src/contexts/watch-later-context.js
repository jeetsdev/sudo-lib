import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useReducer } from "react";
import { ACTION_TYPE, watchLaterReducer } from "../reducers";
import { useAuth } from "./auth-context";

// context here
const WatchLaterContext = createContext();
export const useWatchLater = () => useContext(WatchLaterContext);

export const WatchLaterProvider = ({ children }) => {
	const { authToken } = useAuth();
	const {
		GET_WATCH_LATER_VIDEOS,
		ADD_TO_WATCH_LATER,
		REMOVE_FROM_WATCH_LATER,
	} = ACTION_TYPE;
	const [state, dispatch] = useReducer(watchLaterReducer, {
		watchLaterVideos: [],
	});

	//Initially gtting watch later videos  here
	useEffect(() => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.get("api/user/watchlater", {
						headers: {
							authorization: authToken,
						},
					});
					const {
						status,
						data: { watchlater },
					} = res;

					if (status === 200) {
						dispatch({
							type: GET_WATCH_LATER_VIDEOS,
							payload: watchlater,
						});
					}
				})();
			} catch (error) {
				toast.error("Some error occured.");
			}
		}
	}, [authToken, GET_WATCH_LATER_VIDEOS]);

	// Add to watch later videos handler
	const addToWatchLater = async (video) => {
		try {
			const res = await axios.post(
				"api/user/watchlater",
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
				data: { watchlater },
			} = res;
			if (status === 201) {
				toast.success("Added to watch later videos.");
				dispatch({ type: ADD_TO_WATCH_LATER, payload: watchlater });
			}
		} catch (error) {
			const { status } = error.response;
			if (status === 409) {
				toast.error("Already in watch later videos.");
			}
		}
	};

	// Remove from watch later videos handler
	const removeFromWatchLater = async (video) => {
		try {
			const res = await axios.delete(
				`/api/user/watchlater/${video._id}`,
				{
					headers: {
						authorization: authToken,
					},
				},
			);
			const {
				status,
				data: { watchlater },
			} = res;
			if (status === 200) {
				toast.success("Removed from watch later videos.");
				dispatch({
					type: REMOVE_FROM_WATCH_LATER,
					payload: watchlater,
				});
			}
		} catch (error) {
			toast.error("Some error occured.");
		}
	};

	return (
		<WatchLaterContext.Provider
			value={{
				watchLaterState: state,
				watchLaterDispatch: dispatch,
				addToWatchLater,
				removeFromWatchLater,
			}}>
			{children}
		</WatchLaterContext.Provider>
	);
};
