/* eslint-disable no-unused-vars */
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden",
        "md:top-4 md:right-2 max-sm:right-2"
      )}
    >
      {isDarkMode ? (
        <Moon className="h-6 w-6 blue-900" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-300" />
      )}
    </button>
  );
};
