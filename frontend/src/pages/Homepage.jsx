import BackgroundGlow from "../components/background/BackgroundGlow";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import ProblemSection from "../components/problem/ProblemSection";
import LandingPage from "./LandingPage";
import FeaturesSection from "../components/features/FeaturesSection";
import IdePreviewSection from "../components/ide-preview/IdePreviewSection";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#02040a] text-white overflow-hidden relative">

      {/* Background Effects */}
      <BackgroundGlow />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">

        {/* Hero */}
        <HeroSection />
        <IdePreviewSection />
        <ProblemSection />
        <FeaturesSection />
        {/* <LandingPage /> */}
        


      </main>

    </div>
  );
}