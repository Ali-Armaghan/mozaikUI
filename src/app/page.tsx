import HeroSection from "./Sections/Hero/Hero";
import OverviewSection from "./Sections/Overview/OverviewSection";
import Statics from "./Sections/Statics/Statics";
import StudyArea from "./Sections/StudyArea/StudyArea";
import Featured from "./Sections/featured/featured";
import Services from "./Sections/Services/services";
import LearnMore from "./Sections/learnMore/learnMore";
import ContactUs from "./Sections/contactUs/contactUs";
import Footer from "./Sections/footer/footer";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <HeroSection />
      <OverviewSection />
      <Statics />
      <StudyArea />
      <Featured />
      <Services />
      <LearnMore />
      <ContactUs />
      <Footer />
    </main>
  );
}
