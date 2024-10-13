import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("blue");

  function changeTheme(newTheme) {
    setTheme(newTheme);
    const root = document.documentElement;
    root.style.setProperty("--color-primary-50", `var(--color-${newTheme}-50)`);
    root.style.setProperty(
      "--color-primary-100",
      `var(--color-${newTheme}-100)`
    );
    root.style.setProperty(
      "--color-primary-200",
      `var(--color-${newTheme}-200)`
    );
    root.style.setProperty(
      "--color-primary-300",
      `var(--color-${newTheme}-300)`
    );
    root.style.setProperty(
      "--color-primary-400",
      `var(--color-${newTheme}-400)`
    );
    root.style.setProperty(
      "--color-primary-500",
      `var(--color-${newTheme}-500)`
    );
    root.style.setProperty(
      "--color-primary-600",
      `var(--color-${newTheme}-600)`
    );
    root.style.setProperty(
      "--color-primary-700",
      `var(--color-${newTheme}-700)`
    );
    root.style.setProperty(
      "--color-primary-800",
      `var(--color-${newTheme}-800)`
    );
    root.style.setProperty(
      "--color-primary-900",
      `var(--color-${newTheme}-900)`
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
