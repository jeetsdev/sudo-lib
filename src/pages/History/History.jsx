import { HistoryCard, Sidebar } from "../../components"
import { useHistory } from "../../contexts"
import { Link } from "react-router-dom"
import { BsArrowRightCircleFill } from "react-icons/bs"

export const History = () => {

	const { historyState: { historyVideos }, clearAllHistory } = useHistory();

	return (
		<div className="container__main container__likes">
			<Sidebar />
			<div className="video__sec history__sec">
				{historyVideos.length === 0 ?
					<div className="video__empty-sec">
						<p className="text-mid">Opps! No videos here, Let's watch some videos...</p>
						<Link to="/">
							<button className="btns btn__primary margin-1rem center__flex">
								Explore <BsArrowRightCircleFill className="margin__lr-4px" />
							</button>
						</Link>
					</div>
					:
					<div>
						<div className="video__cat center__flex">
							<p> History {`(${(historyVideos.length)})`}</p>
							<button className="btns btn__primary center__flex" onClick={() => clearAllHistory()}>
								Clear all
							</button>
						</div>
						<div className="video__list-sec">
							{historyVideos.map(eachVideo => {
								return <HistoryCard video={eachVideo} key={eachVideo.id} />
							})}
						</div>
					</div>}
			</div>
		</div>
	)
}
