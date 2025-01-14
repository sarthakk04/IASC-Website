import { useState } from "react";
// import HeroSection from "./Components/herosection";
import "./App.css";
import Navbar from "./Components/navbar";
import HeroRobot from "./Components/hero-robot";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {/* <HeroSection isDarkMode={isDarkMode} /> */}
      <HeroRobot isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
