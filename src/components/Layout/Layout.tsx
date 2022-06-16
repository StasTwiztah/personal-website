import { css } from "@emotion/css";
import {
  AppBar,
  Box,
  Button,
  Container,
  Theme,
  Toolbar,
  Typography,
  Link as MaterialLink,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { useSetTheme } from "../../styles/hooks/useSetTheme";
import { useStyles } from "../../styles/hooks/useStyles";
import { LanguageSelect } from "../LanguageSelect";
import { StylesSelect } from "../StyleSelect";

const layoutStyles = (theme: Theme) => ({
  root: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    background-color: ${theme.palette.background.default};
  `,
  main: css`
    flex: 1;
    max-width: 100vw;
    background-color: ${theme.palette.background.default};
  `,
  footer: css`
    position: relative;
    height: 70px;
    background-color: ${theme.palette.background.paper};
  `,
  toolbar: css`
    box-shadow: inset 0px 2px 4px 0px rgb(0 0 0 / 10%);
  `,
  footerButton: css`
    background-color: transparent;
    position: absolute;
    top: -30px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  goUpButton: css`
    width: 80px;
    height: 40px;
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border-bottom: 0;

    line-height: 70px;
    text-align: center;
    background-color: ${theme.palette.background.paper};
    box-shadow: inset 0px 6px 4px -3px rgb(0 0 0 / 10%);
    transition-duration: 300ms;

    z-index: 1;
    :hover {
      transform: translateY(-3px);
      transition-duration: 300ms;
      cursor: pointer;
    }
  `,
});

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { t, i18n } = useTranslation();
  const { setTheme } = useSetTheme();

  const styles = useStyles(layoutStyles);

  const pages = ["about", "career", "portfolio", "contact"];

  return (
    <div className={styles.root}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
              {pages.map((page) => (
                <Link key={page} to={page} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ my: 2, display: "block", color: "white" }}
                    variant="text"
                  ></Button>
                </Link>
              ))}
            </Box>
            <StylesSelect onChange={setTheme} />
            <LanguageSelect onChange={i18n.changeLanguage} />
          </Toolbar>
        </Container>
      </AppBar>
      <main className={styles.main}>
        {children} <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerButton}>
          <MaterialLink className={styles.goUpButton}>
            <ArrowUpwardIcon />
          </MaterialLink>
        </div>
        <Toolbar className={styles.toolbar}>
          <Typography>{`© ${new Date().getFullYear()} Stanislav Sapogov`}</Typography>
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Link key={page} to={page} style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, display: "block" }}>{t(page)}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </footer>
    </div>
  );
};
