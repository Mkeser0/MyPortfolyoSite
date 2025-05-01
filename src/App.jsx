import "./App.css";
import Footer from "./layout/Footer";

import HeroSection from "./layout/HeroSection";
import ProfileSection from "./layout/ProfileSection";
import ProjectSection from "./layout/ProjectSection";
import SkillSection from "./layout/SkillSection";

function App() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <ProfileSection />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default App;
