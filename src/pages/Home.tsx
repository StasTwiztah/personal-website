import { css } from "@emotion/css";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../components/LanguageSelect";
import { StylesSelect } from "../components/StyleSelect";
import { useSetTheme } from "../styles/hooks/useSetTheme";
import { useStyles } from "../styles/hooks/useStyles";
import { Theme } from "../styles/types/Theme";

const homeStyles = (theme: Theme) => ({
  root: css`
    background-color: ${theme.colors?.backgroundPrimary};
  `,
  heading: css`
    color: ${theme.colors?.primary};
  `,
});

export const Home = () => {
  const styles = useStyles(homeStyles);
  const { setTheme } = useSetTheme();

  const { t, i18n } = useTranslation();

  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>{t("home.heading")}</h1>
      <StylesSelect onChange={setTheme} />
      <LanguageSelect onChange={i18n.changeLanguage} />
    </div>
  );
};
