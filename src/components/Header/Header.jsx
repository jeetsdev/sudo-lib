import {FaSearch} from "react-icons/fa"
import { BiLogInCircle } from "react-icons/bi"

export const Header = () => {
    return (
        <>
            <nav className="nav center__flex">
                {/* Title section here */}
                <div className="nav__title-sec">
                    <h3 className="headline-3"> SudoLib </h3>
                </div>
                {/* Search section here*/}
                <div className="nav__search-sec">
                    <form action="" onSubmit={(event)=>event.preventDefault()} className="center__flex">
                        <FaSearch className="margin__lr-8px"/>
                        <input type="text" placeholder="Search items here" />
                    </form>
                </div>
                {/* Button section here*/}
                <div className="nav__button-sec btn__flow center__flex">
                    <button className="btns btn__primary center__flex">
                        <BiLogInCircle className=" btn__flow-icon margin__lr-4px" /> <p className="btn__flow-text">Login</p> 
                    </button>
                </div>
            </nav>
        </>
    )
}
