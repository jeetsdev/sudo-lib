import { ACTION_TYPE } from "./ACTION_TYPES";

const { GET_VIDEOS } = ACTION_TYPE;
export const videoReducer = ((state, action) => {
    switch (action.type) {
        case GET_VIDEOS:
            return{...state,videos:[...action.payload]}
        default:
            return state;
    }
})