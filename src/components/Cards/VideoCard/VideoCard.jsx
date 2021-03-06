import "./VideoCard.css"
import { HiDotsVertical } from "react-icons/hi"
import { BsFillHandThumbsUpFill, BsFillEyeFill, BsCheckCircleFill } from "react-icons/bs"
import { AiFillClockCircle } from "react-icons/ai"
import { MdPlaylistAdd } from "react-icons/md"
import { useState } from "react"
import { useLike, useAuth, usePlaylist, useWatchLater } from "../../../contexts"
import { useNavigate } from "react-router-dom"
import { shortString } from "../../../utils"
import { ACTION_TYPE } from "../../../reducers"

export const VideoCard = ({ video }) => {

	const { SHOW_MODAL } = ACTION_TYPE;
	const { thumbnail, title, description, creatorAvatar, creator, views } = video;
	const { addToLike } = useLike();
	const { authToken } = useAuth();
	const navigate = useNavigate();
	const { playlistDispatch } = usePlaylist();
	const { addToWatchLater } = useWatchLater();

	// overlay menu here
	const [toolTip, setToolTip] = useState("showMenu");
	const menuClickHandler = () => {
		setToolTip((prevState) => prevState === "showMenu" ? setToolTip("hideMenu") : setToolTip("showMenu"))
	}

	return (
		<div className="video__card">
			{/* Card image here */}
			<div className="video__card-img" onClick={() => navigate(`/video/${video._id}`)}>
				<img src={thumbnail} alt={`${title}`} className="image__res" />
			</div>

			{/*video data here  */}
			<div className="video__card-data">
				<div className="card__data-upper center__flex">
					<div className="data__upper-avatar center__flex">
						<img src={creatorAvatar} alt={`${creatorAvatar}`} className="image__res avatars" />
					</div>

					{/* Title here */}
					<div className="data-upper-title center__flex">
						<p>
							{shortString(title, 8)}
							{title.split(" ").length > 8 ? <span> ... </span> : <span></span>}
						</p>
					</div>

					{/* Menu here */}
					<div className="card__data-menu" onClick={menuClickHandler} >
						<HiDotsVertical className="upper__title-menu" />
						<div className={`card__data-overlay ${toolTip}`}>

							{/* Menu icon here */}
							<BsFillHandThumbsUpFill className="card__btn-like center__flex" onClick={() => authToken ? addToLike(video) : navigate("/login", { replace: true })} />
							<AiFillClockCircle className="center__flex" onClick={() => authToken ? addToWatchLater(video) : navigate("/login", { replace: true })} />
							<MdPlaylistAdd className="center__flex" onClick={() => authToken ? playlistDispatch({ type: SHOW_MODAL, payload: video }) : navigate("/login", { replace: true })} />
						</div>
					</div>
				</div>

				{/* Card mid section here */}
				<div className="card__data-mid center__flex">
					<p className="data__mid-title center__flex">
						<span>{creator} </span>
						<BsCheckCircleFill className="icon-primary margin__lr-4px" />
					</p>
					<p className="data__mid-views center__flex">
						<BsFillEyeFill className="margin__lr-4px" />
						<span>{views}</span>
					</p>
				</div>

				{/* Card description here */}
				<div className="card__data-lower margin-8px">
					<div className="data__lower-descr">
						<p className="txt-mid">{shortString(description, 20)}...</p>
					</div>
				</div>
			</div>
		</div>
	)
}
