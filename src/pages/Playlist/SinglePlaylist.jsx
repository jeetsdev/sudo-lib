import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePlaylist } from "../../contexts";
import { Sidebar, SinglePlaylistCard } from "../../components";
import { BsArrowRightCircleFill } from "react-icons/bs";

export const SinglePlaylist = () => {
    const { playlistID } = useParams();
    const [playlistVideos, setPlaylistVideos] = useState([]);
    const navigate = useNavigate();
    const { playlistState: { playlists } } = usePlaylist();
    const currentPlaylist = playlists.find(eachPlaylist => eachPlaylist._id === playlistID);

    // Lookinf for current playlist in playlist data , if not retrun to playlist page
    useEffect(() => {
        if (currentPlaylist) {
            setPlaylistVideos(currentPlaylist?.videos);
        }
        else {
            toast.error("Playlist not found.")
            navigate("/playlist");
        }
    }, [playlistVideos, navigate, currentPlaylist])

    return (
        <div className="container__main container__likes">
            <Sidebar />
            <div className="video__sec playlist__sec">
                {playlistVideos.length === 0 ?

                    // No videos here
                    <div className="video__empty-sec">
                        <p className="text-mid">Opps! Thers's no videos in {currentPlaylist.title}, Let's explore and add some.</p>
                        <button className="btns btn__primary margin-1rem center__flex" onClick={() => navigate("/explore")}>
                            Explore <BsArrowRightCircleFill className="margin__lr-4px" />
                        </button>
                    </div> :

                    // Videos in playlist
                    <div>
                        <div className="video__cat center__flex">
                            <p>{currentPlaylist.title} {`(${(playlistVideos.length)})`}</p>
                            <button className="btns btn__primary margin-1rem center__flex" onClick={() => navigate("/explore")}>
                                Explore <BsArrowRightCircleFill className="margin__lr-4px" />
                            </button>
                        </div>
                        <div className="video__list-sec">
                            {playlistVideos.map(eachVideo => {
                                return <SinglePlaylistCard video={eachVideo} playlistID={playlistID} key={eachVideo._id} />
                            })}
                        </div>
                    </div>}
            </div>
        </div>
    )
}
