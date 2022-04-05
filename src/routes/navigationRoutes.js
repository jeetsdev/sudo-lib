import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home,Error, Explore  } from "../pages";

export const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};
