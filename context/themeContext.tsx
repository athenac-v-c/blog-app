'use client'

import { createContext, useState, useContext, ReactNode, useEffect} from "react";



export const ThemeContext = createContext<string>('light');

const getFromLocalStorage = () =>{
    if (typeof window !== "undefined" ){
        const value = localStorage.getItem("theme");
        return value || "light";
    }
    return "light"
  }

export default function ThemeContextProvider({ children }: { children: ReactNode }) {

 
   const [theme, setTheme] = useState<string>(getFromLocalStorage);


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme }>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}