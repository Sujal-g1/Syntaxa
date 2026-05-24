import { Routes, Route } from "react-router-dom";

import IntroPage from "../pages/IntroPage";
import Homepage from "../pages/Homepage";

function AppRoutes() {
  return (
    <Routes>

      {/* Intro Screen */}
      <Route path="/" element={<IntroPage />} />

      {/* Main Homepage */}
      <Route path="/home" element={<Homepage />} />

    </Routes>
  );
}

export default AppRoutes;