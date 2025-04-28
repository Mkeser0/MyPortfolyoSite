import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    // Sayfa açılırken localStorage'dan veriyi oku
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "false"; // true/false olarak ayarla
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Her değişimde localStorage'ı güncelle
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
