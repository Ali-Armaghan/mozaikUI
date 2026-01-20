import HeroSection from "./Sections/Hero/Hero";
import OverviewSection from "./Sections/OverviewSection/OverviewSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <HeroSection />
      <OverviewSection />
    </main>
  );
}
