import { usePlaylist } from "../../contexts";
import { ACTION_TYPE } from "../../reducers";
import { MdCancel } from "react-icons/md"
import { useState } from "react";
import toast from "react-hot-toast";

export const PlaylistModal = ({ showPlaylistFlag }) => {
    const { playlistState: { modalData, playlists }, addToPlaylist, playlistDispatch, createPlaylist, removeFromPlaylist } = usePlaylist();
    const { HIDE_MODAL } = ACTION_TYPE;
    const [newPlaylistFlag, setNewPlaylistFlag] = useState(false);
    const [playlistData, setPlaylistData] = useState({
        title: "",
        details: "",
    });


    // Create playlist handler 
    const createPlaylistHandler = () => {
        if (playlistData.title === "") {
            toast.error("Playlist name can't be empty");
        }
        else {
            createPlaylist(playlistData);
            setPlaylistData({
                title: "",
                details: "",
            })
            setNewPlaylistFlag(false);
        }
    }

    return (
        <div className="modal__box modal-active">
            <div className="modal padding__lr-8px">

                {/* Dismiss button  */}
                <MdCancel className="dismiss__btn icons border__rad-full" onClick={() => playlistDispatch({ type: HIDE_MODAL })} />

                {/* Modal title */}
                <div className="modal__title">
                    {showPlaylistFlag ? <h3 className="headline-3 text-primary">Add to Playlist</h3> : <h3 className="headline-3 text-primary">Create Playlist</h3>}
                </div>

                {/* Modal discription*/}
                {showPlaylistFlag && <div className="modal__info margin__tb-8px text">
                    {playlists.length !== 0 ? playlists.map(eachPlaylist => {

                        // Checking if video already in the playlist
                        const isAlreadyInPlaylist = eachPlaylist.videos?.some(
                            (eachPlaylist) => eachPlaylist?._id === modalData?._id
                        );

                        // if present then remove else add function
                        return <div key={eachPlaylist._id} className="modal__playlist padding__tb-4px">
                            <input type="checkbox" id={`${eachPlaylist._id}`} checked={isAlreadyInPlaylist} onChange={(e) => {
                                e.target.checked ?
                                    addToPlaylist(modalData, eachPlaylist)
                                    :
                                    removeFromPlaylist(modalData, eachPlaylist._id);
                            }} />
                            <label htmlFor={`${eachPlaylist._id}`} className="margin__lr-8px text-sml">{eachPlaylist.title}</label>
                        </div>
                    }) : <p>Create a playlist first.</p>}
                </div>}

                {/* Create new playlist section here */}
                {newPlaylistFlag && <form className="modal__create__playlist center__flex flex__dir-col margin__tb-8px" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Playlist name" className="padding-8px margin__tb-8px" value={playlistData.title} onChange={(e) => setPlaylistData({ ...playlistData, title: e.target.value })} required />
                    <input type="text" placeholder="Playlist details" className="padding-8px margin__tb-8px" value={playlistData.details} onChange={(e) => setPlaylistData({ ...playlistData, details: e.target.value })} required />
                </form>}

                {/* Modal buttons here */}
                <div className="modal__btns">
                    {newPlaylistFlag === true ? <button className="btns btn__primary margin__tb-8px" onClick={createPlaylistHandler}>Create</button> : <button className="btns btn__primary" onClick={() => setNewPlaylistFlag(true)}>Create New Playlist</button>}
                </div>
            </div>
        </div>
    )
}
