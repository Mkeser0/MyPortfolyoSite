import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./layout/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "./layout/HeroSection";
import ProfileSection from "./layout/ProfileSection";
import ProjectSection from "./layout/ProjectSection";
import SkillSection from "./layout/SkillSection";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const darkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    toast.success("Merhaba, sayfama hoş geldiniz!", {
      position: "top-right",
      autoClose: 2000,
    });
    axios
      .get("https://68171cf426a599ae7c395970.mockapi.io/mk/users")
      .then((response) => {
        console.log("Kullanıcı:", response.data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);

  return (
    <div data-cy="app-container" className={darkMode ? "dark" : ""}>
      <ToastContainer />
      <HeroSection />
      <SkillSection />
      <ProfileSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
