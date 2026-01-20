import HeroSection from "./Sections/Hero/Hero";
import OverviewSection from "./Sections/Overview/OverviewSection";
import Statics from "./Sections/statics/statics";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <HeroSection />
      <OverviewSection />
      <Statics />
    </main>
  );
}
