import { Categories, PlaylistModal, VideoCard } from "../../components";
import { usePlaylist, useVideo } from "../../contexts";
import "./Explore.css";

export const Explore = () => {
	const {
		videoState: { videos },
	} = useVideo();
	const {
		playlistState: { modalFlag },
	} = usePlaylist();

	return (
		<div className="container__main container__explore">
			{modalFlag && <PlaylistModal showPlaylistFlag={true} />}
			<div className="container__mid-sec ">
				<Categories />
				<div className="video__list-sec">
					{videos &&
						videos.map((eachVideo) => {
							return (
								<VideoCard
									video={eachVideo}
									key={eachVideo.id}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};
