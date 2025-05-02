import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./layout/Footer";

import HeroSection from "./layout/HeroSection";
import ProfileSection from "./layout/ProfileSection";
import ProjectSection from "./layout/ProjectSection";
import SkillSection from "./layout/SkillSection";

function App() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <HeroSection />
      <SkillSection />
      <ProfileSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
