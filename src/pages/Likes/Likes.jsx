import { LikesCard, PlaylistModal } from "../../components";
import { useLike, usePlaylist } from "../../contexts";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./Likes.css";
export const Likes = () => {
	const {
		likedState: { likedVideos },
	} = useLike();
	const {
		playlistState: { modalFlag },
	} = usePlaylist();

	return (
		<div className="container__main container__likes">
			{modalFlag && <PlaylistModal showPlaylistFlag={true} />}
			<div className="container__mid-sec likes__sec">
				{likedVideos.length === 0 ? (
					<div className="video__empty-sec">
						<p className="text-mid">
							Opps! List is empty, Let's explore and add some.
						</p>
						<Link to="/">
							<button className="btns btn__primary margin-1rem center__flex">
								Explore{" "}
								<BsArrowRightCircleFill className="margin__lr-4px" />
							</button>
						</Link>
					</div>
				) : (
					<div>
						<div className="video__cat">
							<p>Liked videos {`(${likedVideos.length})`}</p>
						</div>
						<div className="video__list-sec">
							{likedVideos.map((eachVideo) => {
								return (
									<LikesCard
										video={eachVideo}
										key={eachVideo.id}
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
