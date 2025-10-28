"use client";
import { createContext, useState, ReactNode, useEffect } from "react";

export type ThemeContextProps = {
  theme: string;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
 
  const [theme, setTheme] = useState<string | null>(null);

  
  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light";
    setTheme(stored);
    //document.documentElement.setAttribute("data-theme", stored);
  }, []);

  const toggle = () => {
    if (!theme) return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    //document.documentElement.setAttribute("data-theme", newTheme);
  };


  if (theme === null) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

