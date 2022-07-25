import { Link } from "react-router-dom"
import "./Error.css"

export const Error = () => {
    return <div className="container__error center__flex flex__dir-col">
        <h1>Not done yet Return to Explore please</h1>
        <Link to={"/"} className="btns btn__primary margin-1rem">Explore</Link>
    </div>
}