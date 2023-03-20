import React from "react";
import { useState } from "react";

import { MdDarkMode, MdSunny } from "react-icons/md";

export default function ButtonMode() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-1 text-white border-2 rounded-full bg-main border-main"
    >
      {darkMode ? <MdSunny size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
}
