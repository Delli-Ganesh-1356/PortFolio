import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import AllProjects from "./components/AllProjects";
import { Toaster } from "@/components/ui/toaster";
import { StarBackground } from "./components/StarBackground";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <StarBackground darkMode={darkMode} />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
