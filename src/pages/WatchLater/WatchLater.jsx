import { WatchLaterCard } from "../../components";
import { useWatchLater } from "../../contexts";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

export const WatchLater = () => {
	const {
		watchLaterState: { watchLaterVideos },
	} = useWatchLater();

	return (
		<div className="container__main container__likes">
			<div className="container__mid-sec likes__sec">
				{watchLaterVideos.length === 0 ? (
					<div className="video__empty-sec">
						<p className="text-mid">
							Opps! No videos here, Let's explore and add some.
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
							<p>
								Watch later videos{" "}
								{`(${watchLaterVideos.length})`}
							</p>
						</div>
						<div className="video__list-sec">
							{watchLaterVideos.map((eachVideo) => {
								return (
									<WatchLaterCard
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
