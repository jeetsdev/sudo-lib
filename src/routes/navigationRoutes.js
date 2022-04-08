import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../contexts";
import {
    Home,
    Error,
    Explore,
    Login,
    SignUp,
    Likes,
    Playlist,
    WatchLater,
    History,
    Profile,
} from "../pages";

export const NavigationRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
                path="/likes"
                element={
                    <RequireAuth>
                        <Likes />
                    </RequireAuth>
                }
            />
            <Route
                path="/playlist"
                element={
                    <RequireAuth>
                        <Playlist />
                    </RequireAuth>
                }
            />
            <Route
                path="/watchlater"
                element={
                    <RequireAuth>
                        <WatchLater />
                    </RequireAuth>
                }
            />
            <Route
                path="/history"
                element={
                    <RequireAuth>
                        <History />
                    </RequireAuth>
                }
            />
            <Route
                path="/profile"
                element={
                    <RequireAuth>
                        <Profile />
                    </RequireAuth>
                }
            />
            <Route path="/mockman" element={<Mockman />} />
        </Routes>
    );
};
