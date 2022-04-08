import { Categories, Sidebar, VideoCard } from "../../components"
import { useAuth, useVideo } from "../../contexts"
import "./Explore.css"

export const Explore = () => {
  const { videoState: { videos } } = useVideo();

  return (
    <div className="container__main container__explore">
      <Sidebar />
      <div className="explore__video">
       <Categories />
        <div className="video__list">
          {videos && videos.map((eachVideo) => {
            return <VideoCard video={eachVideo} key={eachVideo.id} />
          })}
        </div>
      </div>
    </div>
  )
}
