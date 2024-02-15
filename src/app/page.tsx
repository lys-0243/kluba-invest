import HeroSection from "./components/home/HeroSection";
import KlubaTime from "./components/home/KlubaTime";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    // <ParallaxProvider>
      <main>
        <HeroSection />

        <KlubaTime />
      </main>
    // </ParallaxProvider>
  );
}

// mx-auto 2xl:max-w-screen-xl xl:max-w-screen-xl
