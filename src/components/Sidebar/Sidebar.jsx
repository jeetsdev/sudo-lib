import { AiFillHome, AiFillClockCircle, AiOutlineHistory, AiOutlineLogout } from 'react-icons/ai'
import { MdExplore, MdVideoLibrary } from 'react-icons/md'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

// Active link style here
const activeStyle = (isActive) => {
    return {
        backgroundColor: isActive ? "#d44d5c" : "#0b0014",
    }
}

export const Sidebar = () => {
    return (
        <div className="explore__sidebar">
            <NavLink to="/" className="sidebar__link center__flex" style={({ isActive }) => activeStyle(isActive)}>
                <AiFillHome className='margin__lr-4px' />
                Home
            </NavLink>
            <NavLink to="/explore" className="sidebar__link center__flex" style={({ isActive }) => activeStyle(isActive)}>
                <MdExplore />
                Explore
            </NavLink>
            <NavLink to="/playlist" className="sidebar__link center__flex" style={({ isActive }) => activeStyle(isActive)}>
                <MdVideoLibrary />
                Playlist
            </NavLink>
            <NavLink to="/likes" className="sidebar__link center__flex" style={({ isActive }) => activeStyle(isActive)}>
                <BsFillHandThumbsUpFill />
                Likes
            </NavLink>
            <NavLink to="/watchlater" className="sidebar__link center__flex" style={({ isActive }) => activeStyle(isActive)}>
                <AiFillClockCircle />
                Watch Later
            </NavLink>
            <NavLink to="/history" className="sidebar__link center__flex" style={({ isActive }) => activeStyle(isActive)}>
                <AiOutlineHistory />
                History
            </NavLink>
            <NavLink to="/logout" className="sidebar__link center__flex" style={({ isActive }) => activeStyle(isActive)}>
                <AiOutlineLogout />
                Logout
            </NavLink>
        </div>
    )
}
