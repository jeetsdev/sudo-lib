import { ACTION_TYPE } from "./ACTION_TYPES";

const {
	GET_PLAYLIST,
	CREATE_PLAYLIST,
	DELETE_PLAYLIST,
	SHOW_MODAL,
	HIDE_MODAL,
	ADD_TO_PLAYLIST,
	REMOVE_FROM_PLAYLIST,
} = ACTION_TYPE;
export const playlistReducer = (state, action) => {
	switch (action.type) {
		case GET_PLAYLIST:
			return { ...state, playlists: action.payload };
		case CREATE_PLAYLIST:
			return { ...state, playlists: action.payload };
		case DELETE_PLAYLIST:
			return { ...state, playlists: action.payload };
		case SHOW_MODAL:
			return { ...state, modalFlag: true, modalData: action.payload };
		case HIDE_MODAL:
			return { ...state, modalFlag: false, modalData: {} };
		case ADD_TO_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.map((item) => {
					return item._id === action.payload._id
						? action.payload
						: item;
				}),
			};
		case REMOVE_FROM_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.map((item) => {
					return item._id === action.payload._id
						? action.payload
						: item;
				}),
			};
		default:
			return state;
	}
};
