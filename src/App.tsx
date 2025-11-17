import { useEffect, useState } from "react";
import "./App.css";
import BreedList from "./components/BreedList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? "dark-mode" : "";

  const handleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={theme}>
      <button className="theme-toggler" onClick={handleTheme}>
        Light Dark Mode
      </button>
      <BreedList />
    </div>
  );
}

export default App;
