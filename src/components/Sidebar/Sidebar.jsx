import { AiFillHome, AiFillClockCircle, AiOutlineHistory, AiOutlineLogout } from 'react-icons/ai'
import { MdExplore, MdVideoLibrary } from 'react-icons/md'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'

// Active link style here
const activeStyle = (isActive) => {
    return {
        backgroundColor: isActive ? "#d44d5c" : "#0b0014",
    }
}

// Compoent for Sidebar links
const SideNavLink = ({ route, name, icon }) => {
    return <NavLink to={`/${route}`} className="sidebar__link center__flex" style={({ isActive }) => activeStyle(isActive)}>
        {icon}
        {name}
    </NavLink>
}

export const Sidebar = () => {
    const { authToken, signOutHandler } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="sidebar__menu">
            <SideNavLink route={""} icon={<AiFillHome />} name={"Home"} />
            <SideNavLink route={"explore"} icon={<MdExplore />} name={"Explore"} />
            <SideNavLink route={"playlist"} icon={<MdVideoLibrary />} name={"Playlist"} />
            <SideNavLink route={"likes"} icon={<BsFillHandThumbsUpFill />} name={"Likes"} />
            <SideNavLink route={"watchlater"} icon={<AiFillClockCircle />} name={"Watch Later"} />
            <SideNavLink route={"history"} icon={<AiOutlineHistory />} name={"History"} />

            {/* Checking for auth here */}
            {authToken ?
                <div className="sidebar__link center__flex" onClick={() => signOutHandler()} >
                    <AiOutlineLogout />
                    Logout
                </div> :
                <div className="sidebar__link center__flex" onClick={() => navigate("/login")} >
                    <AiOutlineLogout />
                    Login
                </div>}
        </div>
    )
}
