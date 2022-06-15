import { css } from "@emotion/css";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { useSetTheme } from "../../styles/hooks/useSetTheme";
import { useStyles } from "../../styles/hooks/useStyles";
import { LanguageSelect } from "../LanguageSelect";
import { StylesSelect } from "../StyleSelect";

const layoutStyles = () => ({
  root: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
  `,
  main: css`
    flex: 1;
  `,
});

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { t, i18n } = useTranslation();
  const { setTheme } = useSetTheme();

  const styles = useStyles(layoutStyles);

  const pages = ["about", "career", "portfolio", "contact"];

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
              {pages.map((page) => (
                <Link key={page} to={page} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ my: 2, display: "block" }}
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
      <footer>
        <Toolbar>
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
