import { FaSearch, FaUserCircle } from "react-icons/fa"
import { BiLogInCircle } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts"

export const Header = () => {

    const { authToken, userName } = useAuth();

    return (
        <>
            <nav className="nav center__flex">
                {/* Title section here */}
                <div className="nav__title-sec">
                    <Link to={"/"}>
                        <h3 className="headline-3"> SudoLib </h3>
                    </Link>
                </div>
                {/* Search section here*/}
                <div className="nav__search-sec">
                    <form action="" onSubmit={(event)=>event.preventDefault()} className="center__flex">
                        <FaSearch className="margin__lr-8px"/>
                        <input type="text" placeholder="Search videos here" />
                    </form>
                </div>
                {/* Button section here*/}
                <div className="nav__button-sec btn__flow center__flex">
                    {authToken ? <div>
                        <Link to={"/profile"} className="user__avatar center__flex">
                            <p className="margin__lr-8px">Hi {userName.split(" ")[0]}</p>
                            <FaUserCircle className="user__avatar-icon margin__lr-4px" />
                        </Link>
                    </div>
                    : <Link to={"/login"} className="btns btn__primary center__flex">
                        <BiLogInCircle className=" btn__flow-icon margin__lr-4px" /> <p className="btn__flow-text">Login</p> 
                    </Link>}
                </div>
            </nav>
        </>
    )
}
