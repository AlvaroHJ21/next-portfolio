import { useState, useEffect } from "react";

import { MdDarkMode, MdSunny } from "react-icons/md";

export default function ButtonMode() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setMode('dark')
    } else {
      document.documentElement.classList.remove("dark");
      setMode('light')
    }
  }, [mode]);

  function handleToggleMode() {
    // document.documentElement.classList.toggle("dark");

    if (mode === "dark") {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
      setMode("light");
    } else {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
      setMode("dark");
    }

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
  }
  return (
    <button
      onClick={() => handleToggleMode()}
      className="p-1 text-white border-2 rounded-full bg-main border-main"
    >
      {mode === "dark" ? <MdSunny size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
}
