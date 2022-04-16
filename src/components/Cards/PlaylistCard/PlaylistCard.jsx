import { getThumbnail, shortString } from "../../../utils";
import "./PlaylistCard.css";
import { MdDelete, MdVideocam } from "react-icons/md"
import { usePlaylist } from "../../../contexts";
import { useNavigate } from "react-router-dom";

export const PlaylistCard = ({ playlist }) => {
    const { deletePlaylist } = usePlaylist();
    const { title, details } = playlist;
    const navigate = useNavigate();

    return (
        <div className="playlist__card">
            <div className="playlist__card-img" onClick={() => navigate(`/playlist/${playlist._id}`)}>
                <img src={playlist.videos.length !== 0 ? getThumbnail(playlist?.videos[0]?._id) : "https://img.youtube.com/vi/wBp0Rb-ZJak/mqdefault.jpg"} alt={`${title}playlist`} className="image__res" />
            </div>
            <div className="playlist__card-overlay">
                <section className="card__overlay card__overlay-right center__flex">
                    <MdVideocam className="overlay__btn" />
                    <p className="margin__lr-8px">{playlist.videos.length}</p>
                </section>
                <section className="card__overlay card__overlay-bottom center__flex">
                    <div>
                        <p className="card__overlay-title text__primary margin-8px">{`${title}`}</p>
                        <p className="card__overlay-details margin-8px txt-sml">{`${shortString(details, 5)}...`}</p>
                    </div>
                    <MdDelete className="overlay__btn-delete margin-8px" onClick={() => deletePlaylist(playlist)} />
                </section>
            </div>
        </div>
    )
}
