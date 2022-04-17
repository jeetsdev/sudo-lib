import { ACTION_TYPE } from "./ACTION_TYPES";

const { GET_WATCH_LATER_VIDEOS, ADD_TO_WATCH_LATER,REMOVE_FROM_WATCH_LATER } = ACTION_TYPE;
export const watchLaterReducer = (state, action) => {
	switch (action.type) {
		case GET_WATCH_LATER_VIDEOS:
			return {
				...state,
				watchLaterVideos: action.payload,
			};
		case ADD_TO_WATCH_LATER:
			return {
				...state,
				watchLaterVideos: action.payload,
			};
		case REMOVE_FROM_WATCH_LATER:
			return {
				...state,
				watchLaterVideos: action.payload,
			};
		default:
			return state;
	}
};
