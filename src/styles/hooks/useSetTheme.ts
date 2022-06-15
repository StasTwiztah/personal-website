import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { ThemeName } from "../types/ThemeName";

export function useSetTheme() {
  const { setThemeName } = useContext(ThemeContext);

  return {
    setTheme: (themeName: ThemeName) => {
      setThemeName(themeName);
    },
  };
}
