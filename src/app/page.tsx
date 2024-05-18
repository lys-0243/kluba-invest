import About from "./components/home/About";
import HeroSection from "./components/home/HeroSection";
import InvestDetails from "./components/home/InvestDetails";
import KlubaTime from "./components/home/KlubaTime";
import Blog from "./components/minimals/Blog";
import Partnairs from "./components/minimals/Partnairs";
import Testimonies from "./components/minimals/Testimonies";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <KlubaTime />
      <About />
      <InvestDetails />
      <Testimonies/>
      <Blog />
      <Partnairs />
    </main>
  );
}
