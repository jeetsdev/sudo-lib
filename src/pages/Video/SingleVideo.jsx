import { useNavigate, useParams } from "react-router-dom";
import {
	useAuth,
	useHistory,
	useLike,
	usePlaylist,
	useVideo,
	useWatchLater,
} from "../../contexts";
import { PlaylistModal, VideoIframe } from "../../components";
import {
	BsFillEyeFill,
	BsCheckCircleFill,
	BsFillHandThumbsUpFill,
} from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import "./SingleVideo.css";
import { ACTION_TYPE } from "../../reducers";
import { useEffect } from "react";

export const SingleVideo = () => {
	const { videoID } = useParams();

	const {
		videoState: { videos },
	} = useVideo();
	const currentVideo = videos.find((eachVideo) => eachVideo?._id === videoID);
	const {
		historyState: { historyVideos },
		addToHistory,
	} = useHistory();
	const { authToken } = useAuth();
	const { addToLike } = useLike();
	const { addToWatchLater } = useWatchLater();
	const navigate = useNavigate();
	const {
		playlistState: { modalFlag },
		playlistDispatch,
	} = usePlaylist();
	const { SHOW_MODAL } = ACTION_TYPE;

	const isAlreadyInHistory = historyVideos?.some(
		(eachVideo) => eachVideo?._id === currentVideo?._id,
	);

	// Adding to history here
	useEffect(() => {
		if (!isAlreadyInHistory && currentVideo) {
			addToHistory(currentVideo);
		}
	}, [addToHistory, currentVideo, isAlreadyInHistory]);

	return (
		<div className="container__main container__likes">
			{modalFlag && <PlaylistModal showPlaylistFlag={true} />}

			<div className="container__mid-sec playlist__sec border__rad-4px grid">
				<div>
					<div className="video__sec-video ">
						<VideoIframe video={currentVideo} />
					</div>
					<div className="video__sec-other">
						{/* Video title here */}
						<div className="other__sec-title center__flex margin__tb-8px">
							<h3 className="headline-3 text-heading">
								{currentVideo?.title}
							</h3>
							<p className="data__mid-views center__flex">
								<BsFillEyeFill className="margin__lr-4px" />
								<span>{currentVideo?.views}</span>
							</p>
						</div>

						{/* Creator name here */}
						<div className="margin__tb-8px">
							<p className="other__sec-creator center__flex">
								<span>{currentVideo?.creator} </span>
								<BsCheckCircleFill className="icon-primary margin__lr-4px" />
							</p>
						</div>

						{/* Button here */}
						<div className="other__sec-btn center__flex margin__tb-8px">
							<button
								className="btns video__cat-btn center__flex margin__tb-8px"
								onClick={() =>
									authToken
										? addToLike(currentVideo)
										: navigate("/login", { replace: true })
								}>
								<p className="margin__lr-4px">Like</p>
								<BsFillHandThumbsUpFill className="card__btn-like" />
							</button>
							<button
								className="btns video__cat-btn center__flex margin-8px"
								onClick={() =>
									authToken
										? addToWatchLater(currentVideo)
										: navigate("/login", { replace: true })
								}>
								<p className="margin__lr-4px">Watch Later</p>
								<AiFillClockCircle className="" />
							</button>
							<button
								className="btns video__cat-btn center__flex"
								onClick={() =>
									authToken
										? playlistDispatch({
												type: SHOW_MODAL,
												payload: currentVideo,
										  })
										: navigate("/login", { replace: true })
								}>
								<p className="margin__lr-4px">
									Save to Playlist
								</p>
								<MdPlaylistAdd className="" />
							</button>
						</div>

						{/* Description here */}
						<div className="other__sec-descr margin__tb-8px">
							<div className="card__data-lower">
								<p className="txt-mid">
									Description : {currentVideo?.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
