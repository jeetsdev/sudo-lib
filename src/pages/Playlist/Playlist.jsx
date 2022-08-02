import { PlaylistModal, PlaylistCard } from "../../components";
import "./Playlist.css";
import { usePlaylist } from "../../contexts";
import { ACTION_TYPE } from "../../reducers";

const { SHOW_MODAL } = ACTION_TYPE;
export const Playlist = () => {
	const {
		playlistState: { modalFlag, playlists },
		playlistDispatch,
	} = usePlaylist();

	return (
		<div className="container__main container__likes">
			{modalFlag && <PlaylistModal showPlaylistFlag={false} />}
			<div className="video__sec playlist__sec">
				{playlists.length === 0 ? (
					<div className="video__empty-sec">
						<p className="text-mid">
							Opps! Thers's no playlist, Let's create one.
						</p>
						<button
							className="btns btn__primary margin-1rem center__flex"
							onClick={() =>
								playlistDispatch({ type: SHOW_MODAL })
							}>
							Create Playlist
						</button>
					</div>
				) : (
					<div>
						<div className="video__cat center__flex">
							<p>Playlists {`(${playlists.length})`}</p>
							<button
								className="btns btn__primary center__flex"
								onClick={() =>
									playlistDispatch({ type: SHOW_MODAL })
								}>
								Create Playlist
							</button>
						</div>
						<div className="video__list-sec">
							{playlists.map((eachPlaylist) => {
								return (
									<PlaylistCard
										playlist={eachPlaylist}
										key={eachPlaylist._id}
									/>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
