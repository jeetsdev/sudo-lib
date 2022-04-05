import { Link } from "react-router-dom"
import { BsArrowRightCircleFill } from "react-icons/bs"
import "./Home.css"

export const Home = () => {
  return (
    <>
      <div className="container__main container__main-home center__flex flex__dir-col">
        <h1>Gonna work on it later on</h1>
        <Link to="/explore"><button className="btns btn__primary margin-1rem center__flex">
          Explore <BsArrowRightCircleFill className="margin__lr-4px"/>
        </button></Link>
      </div>
    </>
  )
}
