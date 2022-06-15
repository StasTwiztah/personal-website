import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "../styles/ThemeProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export const GlobalProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  );
};
