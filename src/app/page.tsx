import About from "./components/home/About";
import HeroSection from "./components/home/HeroSection";
import InvestDetails from "./components/home/InvestDetails";
import KlubaTime from "./components/home/KlubaTime";
import Partnairs from "./components/minimals/Partnairs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <KlubaTime />
      <About />
      <InvestDetails/>

      <Partnairs/>

      
    </main>
  );
}
