import HeroSection from "./Sections/Hero/Hero";
import OverviewSection from "./Sections/Overview/OverviewSection";
import Statics from "./Sections/Statics/Statics";
import StudyArea from "./Sections/StudyArea/StudyArea";
// import Featured from "./Sections/featured/featured";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <HeroSection />
      <OverviewSection />
      <Statics />
      <StudyArea />
      {/* <Featured/> */}
    </main>
  );
}
