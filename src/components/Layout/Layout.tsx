import { css } from "@emotion/css";
import { AppBar, Theme, Toolbar, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { useSetTheme } from "../../styles/hooks/useSetTheme";
import { useStyles } from "../../styles/hooks/useStyles";
import { LanguageSelect } from "../LanguageSelect";
import { StylesSelect } from "../StyleSelect";
import { Footer } from "./Footer";

const layoutStyles = (theme: Theme) => ({
  root: css`
    color: ${theme.palette.primary.main};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    background-color: ${theme.palette.background.default};
  `,
  appBar: css`
    padding: 0 120px;
    z-index: 1;
    box-shadow: 0px 7px 14px 4px rgb(0 0 0 / 10%);
  `,
  navigation: css`
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex: 1;
  `,
  main: css`
    padding: 50px 120px;
    flex: 1;
    max-width: 100vw;
    background-color: ${theme.palette.background.default};
  `,
  link: css`
    transition-duration: 300ms;

    :hover {
      transition-duration: 300ms;
      transform: scale(1.1);
    }
  `,
});

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { t, i18n } = useTranslation();
  const { setTheme } = useSetTheme();

  const styles = useStyles(layoutStyles);

  const pages = ["about", "career", "portfolio", "contact"];

  return (
    <div className={styles.root} id="top">
      <AppBar position="static" color="primary" className={styles.appBar}>
        <Toolbar disableGutters>
          <div className={styles.navigation}>
            {pages.map((page) => (
              <Link
                key={page}
                to={page}
                style={{ textDecoration: "none" }}
                className={styles.link}
              >
                <Typography variant="button">
                  {t(`${page}.page-title`)}
                </Typography>
              </Link>
            ))}
          </div>
          <div>
            <StylesSelect onChange={setTheme} />
            <LanguageSelect onChange={i18n.changeLanguage} />
          </div>
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        {children} <Outlet />
      </main>
      <Footer pages={pages} />
    </div>
  );
};
