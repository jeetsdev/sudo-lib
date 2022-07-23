import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { ACTION_TYPE, likeReducer } from "../reducers";
import { useAuth } from "./auth-context";

const LikeContext = createContext();
const { GET_LIKED_VIDEOS, ADD_TO_LIKE, REMOVE_FROM_LIKE } = ACTION_TYPE;

export const LikeProvider = ({ children }) => {
	const { authToken } = useAuth();
	const [state, dispatch] = useReducer(likeReducer, {
		likedVideos: [],
	});

	// Getting liked videos data here
	useEffect(() => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.get("/api/user/likes", {
						headers: {
							authorization: authToken,
						},
					});
					const {
						status,
						data: { likes },
					} = res;
					if (status === 200) {
						dispatch({ type: GET_LIKED_VIDEOS, payload: likes });
					}
				})();
			} catch (error) {
				toast.error("Some error occured.");
			}
		}
	}, [authToken]);

	// Add to liked videos handler
	const addToLike = async (video) => {
		try {
			const res = await axios.post(
				"/api/user/likes",
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
				data: { likes },
			} = res;
			if (status === 201) {
				toast.success("Added to liked videos.");
				dispatch({ type: ADD_TO_LIKE, payload: likes });
			}
		} catch (error) {
			const { status } = error.response;
			if (status === 409) {
				toast.error("Already in liked videos.");
			}
		}
	};

	// Remove from likes videos handler
	const removeFromLike = async (video) => {
		try {
			const res = await axios.delete(`/api/user/likes/${video._id}`, {
				headers: {
					authorization: authToken,
				},
			});
			const {
				status,
				data: { likes },
			} = res;
			if (status === 200) {
				toast.success("Removed from liked videos.");
				dispatch({ type: REMOVE_FROM_LIKE, payload: likes });
			}
		} catch (error) {
			toast.error("Some error occured.");
		}
	};

	return (
		<LikeContext.Provider
			value={{
				likedState: state,
				likedDispatch: dispatch,
				addToLike,
				removeFromLike,
			}}>
			{children}
		</LikeContext.Provider>
	);
};

export const useLike = () => useContext(LikeContext);
