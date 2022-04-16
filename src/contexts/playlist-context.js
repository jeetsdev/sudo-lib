import axios from "axios";
import { createContext } from "react";
import toast from "react-hot-toast";
import { useContext, useEffect, useReducer } from "react";
import { ACTION_TYPE, playlistReducer } from "../reducers";
import { useAuth } from "./auth-context";
import { shortString } from "../utils";

const PlaylistContext = createContext();
const {
	GET_PLAYLIST,
	CREATE_PLAYLIST,
	DELETE_PLAYLIST,
	ADD_TO_PLAYLIST,
	REMOVE_FROM_PLAYLIST,
} = ACTION_TYPE;

export const PlaylistProvider = ({ children }) => {
	const { authToken } = useAuth();
	const [state, dispatch] = useReducer(playlistReducer, {
		playlists: [],
		modalFlag: false,
		modalData: {},
	});

	// Initially getting all the playlist here
	useEffect(() => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.get("api/user/playlists", {
						headers: {
							authorization: authToken,
						},
					});
					const {
						status,
						data: { playlists },
					} = res;
					if (status === 200) {
						dispatch({
							type: GET_PLAYLIST,
							payload: playlists,
						});
					}
				})();
			} catch (error) {
				toast.error("Some error occured.");
			}
		}
	}, [authToken]);

	// Create playlist handler
	const createPlaylist = (playlistData) => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.post(
						`/api/user/playlists`,
						{
							playlist: playlistData,
						},
						{
							headers: {
								authorization: authToken,
							},
						},
					);
					const {
						status,
						data: { playlists },
					} = res;
					if (status === 201) {
						dispatch({ type: CREATE_PLAYLIST, payload: playlists });
						toast.success(
							`${playlistData.title} playlist created.`,
						);
					}
				})();
			} catch (error) {
				toast.error("Some error occured in createPlaylist .");
			}
		}
	};

	// delete playlist handler
	const deletePlaylist = (playlist) => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.delete(
						`/api/user/playlists/${playlist._id}`,
						{
							headers: {
								authorization: authToken,
							},
						},
					);
					const {
						status,
						data: { playlists },
					} = res;
					if (status === 200) {
						dispatch({ type: DELETE_PLAYLIST, payload: playlists });
						toast.success(
							`${playlist.title} deleted successfully.`,
						);
					}
				})();
			} catch (error) {
				toast.error("Some error occured in deletePlaylist .");
			}
		}
	};

	// Add to playlist handler here
	const addToPlaylist = (video, currentPlaylist) => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.post(
						`/api/user/playlists/${currentPlaylist._id}`,
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
						data: { playlist },
					} = res;
					if (status === 201) {
						dispatch({ type: ADD_TO_PLAYLIST, payload: playlist });
						toast.success(
							`${shortString(
								video.title,
								3,
							)} added successfully.`,
						);
					}
				})();
			} catch (error) {
				toast.error("Some error occured in add to playlist .");
			}
		}
	};

	// Remove from playlist handler here
	const removeFromPlaylist = (video, currentPlaylistID) => {
		if (authToken) {
			(async () => {
				try {
					const res = await axios.delete(
						`/api/user/playlists/${currentPlaylistID}/${video._id}`,
						{
							headers: {
								authorization: authToken,
							},
						},
					);

					const {
						status,
						data: { playlist },
					} = res;
					if (status === 200) {
						dispatch({
							type: REMOVE_FROM_PLAYLIST,
							payload: playlist,
						});
						toast.success(
							`${shortString(video.title, 3)} removed.`,
							{
								icon: "⚠️",
							},
						);
					}
				} catch (error) {
					toast.error(
						"Some error occured in removing from playlist .",
					);
				}
			})();
		}
	};

	return (
		<PlaylistContext.Provider
			value={{
				playlistState: state,
				playlistDispatch: dispatch,
				createPlaylist,
				deletePlaylist,
				addToPlaylist,
				removeFromPlaylist,
			}}>
			{children}
		</PlaylistContext.Provider>
	);
};

export const usePlaylist = () => useContext(PlaylistContext);
