import { Routes, Route } from "react-router-dom";

import IntroPage from "../pages/IntroPage";
import Homepage from "../pages/Homepage";
import Workspace from "../pages/Workspace";


function AppRoutes() {
  return (
    <Routes>

      {/* Intro Screen */}
      <Route path="/" element={<IntroPage />} />

      {/* Main Homepage */}
      <Route path="/home" element={<Homepage />} />

      <Route path="/workspace" element={<Workspace />} />

    </Routes>
  );
}

export default AppRoutes;