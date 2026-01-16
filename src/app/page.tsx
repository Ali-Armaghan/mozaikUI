import TopBar from "@/app/Sections/Hero/components/TopBar";
import MainNavbar from "@/app/Sections/Hero/components/MainNavbar";
import Hero from "@/app/Sections/Hero/components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <TopBar />
      <MainNavbar />
      <Hero />
    </main>
  );
}
