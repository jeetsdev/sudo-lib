import { ACTION_TYPE } from "./ACTION_TYPES";

const { GET_LIKED_VIDEOS, ADD_TO_LIKE, REMOVE_FROM_LIKE } = ACTION_TYPE;

export const likeReducer = (state, action) => {
	switch (action.type) {
		case GET_LIKED_VIDEOS:
			return { ...state, likedVideos: action.payload };
		case ADD_TO_LIKE:
			return { ...state, likedVideos: action.payload };
		case REMOVE_FROM_LIKE:
			return { ...state, likedVideos: action.payload };
		default:
			return state;
	}
};
