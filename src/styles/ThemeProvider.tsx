import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { createContext, FC, PropsWithChildren, useMemo, useState } from "react";
import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";
import { ThemeName } from "./types/ThemeName";

export const ThemeContext = createContext<{
  setThemeName: (themeName: ThemeName) => void;
}>({
  setThemeName: () => undefined,
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const theme = useMemo(() => {
    switch (themeName) {
      case "dark":
        return darkTheme;

      default:
        return lightTheme;
    }
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{
        setThemeName,
      }}
    >
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
