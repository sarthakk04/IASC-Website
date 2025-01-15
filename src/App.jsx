import { useState } from "react";
// import HeroSection from "./Components/herosection";
import "./App.css";
import Navbar from "./Components/navbar";
import HeroRobot from "./Components/hero-robot";
import AboutUs from "./Components/about-us";
import OurAim from "./Components/our-aim";
import Gallery from "./Components/gallery";
import Footer from "./Components/footer";
import OurTeam from "./Components/our-team";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {/* <HeroSection isDarkMode={isDarkMode} /> */}
      <HeroRobot isDarkMode={isDarkMode} />
      <AboutUs isDarkMode={isDarkMode} />
      <OurAim isDarkMode={isDarkMode} />
      <Gallery isDarkMode={isDarkMode} />
      <OurTeam isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
