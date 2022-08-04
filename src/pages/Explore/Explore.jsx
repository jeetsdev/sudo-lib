import { useState } from "react";
import { Categories, PlaylistModal, VideoCard } from "../../components";
import { usePlaylist, useVideo } from "../../contexts";
import { filterVideos } from "../../utils";
import "./Explore.css";

export const Explore = () => {
	const {
		videoState: { videos },
	} = useVideo();

	const {
		playlistState: { modalFlag },
	} = usePlaylist();

	const [filter, setFilter] = useState("All");

	const finalVideosList = filterVideos(filter, videos);

	return (
		<div className="container__main container__explore">
			{modalFlag && <PlaylistModal showPlaylistFlag={true} />}
			<div className="container__mid-sec ">
				<Categories setFilter={setFilter} filter={filter} />
				<div className="video__list-sec">
					{videos &&
						finalVideosList?.map((eachVideo) => {
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
