import { css } from "@emotion/css";
import { Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useStyles } from "../styles/hooks/useStyles";

const homeStyles = (theme: Theme) => ({
  root: css`
    background-color: ${theme.palette.background.default};
  `,
  heading: css`
    color: ${theme.palette.primary.main};
  `,
});

export const Home = () => {
  const styles = useStyles(homeStyles);
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>{t("home.heading")}</h1>
    </div>
  );
};
