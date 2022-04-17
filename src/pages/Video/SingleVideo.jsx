import { useParams } from "react-router-dom"
import { useHistory, useVideo } from "../../contexts";
import { Sidebar, VideoIframe } from "../../components";

export const SingleVideo = () => {
    const { videoID } = useParams();

    const { videoState: { videos } } = useVideo();
    const currentVideo = videos.find(eachVideo => eachVideo._id === videoID);
    const { historyState: { historyVideos }, addToHistory } = useHistory();
    const isAlreadyInHistory = historyVideos?.some(
        (eachVideo) => eachVideo?._id === currentVideo?._id
    );
    if (!isAlreadyInHistory) {
        addToHistory(currentVideo);
    }
    return (
        <div className="container__main container__likes">
            <Sidebar />
            <div className="video__sec playlist__sec">
                <div className="video__sec-video">
                    <VideoIframe video={currentVideo} />
                </div>
                <div className="video__sec-other">
                    <div className="other__sec-title">
                        <p>{currentVideo.title}</p>
                    </div>
                    <div className="other__sec-descr">
                        <p>{currentVideo.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
