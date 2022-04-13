import axios from "axios";
import { createContext } from "react";
import { useContext, useEffect, useReducer } from "react";
import { ACTION_TYPE, videoReducer } from "../reducers";

const { GET_VIDEOS } = ACTION_TYPE;
const VideoContext = createContext();
export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
    // Reducer here
    const [state, dispatch] = useReducer(videoReducer, {
        videos: [],
        categories: [],
    });

    // Fetching data here
    useEffect(() => {
        try {
            (async () => {
                const videosData = await axios.get("/api/videos");
                dispatch({
                    type: GET_VIDEOS,
                    payload: videosData.data.videos,
                });
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <VideoContext.Provider
            value={{ videoState: state, videoDispatch: dispatch }}>
            {children}
        </VideoContext.Provider>
    );
};
