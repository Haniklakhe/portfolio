import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");

  if (stored === "dark") return true;
  if (stored === "light") return false;

  return false; // Default to light theme
};

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(getInitialTheme());
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme: () => setIsDark((prev) => !prev),
    }),
    [isDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
