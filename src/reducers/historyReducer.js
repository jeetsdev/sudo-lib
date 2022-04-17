import { ACTION_TYPE } from "./ACTION_TYPES";

const { GET_HISTORY_VIDEOS, ADD_TO_HISTORY, REMOVE_FROM_HISTORY,CLEAR_ALL_HISTORY } = ACTION_TYPE;

export const historyReducer = (state, action) => {
	switch (action.type) {
		case GET_HISTORY_VIDEOS:
			return { ...state, historyVideos: action.payload };
		case ADD_TO_HISTORY:
			return { ...state, historyVideos: action.payload };
		case REMOVE_FROM_HISTORY:
			return { ...state, historyVideos: action.payload };
		case CLEAR_ALL_HISTORY:
			return { ...state, historyVideos: action.payload };
		default:
			return state;
	}
};
