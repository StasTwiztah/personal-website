import { css } from "@emotion/css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Box, Link as MaterialLink, Theme, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useStyles } from "../../styles/hooks/useStyles";

const footerStyles = (theme: Theme) => ({
  root: css`
    color: ${theme.palette.primary.light};
    position: relative;
    min-height: 70px;
    background-color: ${theme.palette.background.paper};
  `,
  buttonWrapper: css`
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

    line-height: 60px;
    text-align: center;
    background-color: ${theme.palette.background.paper};
    box-shadow: inset 0px 6px 4px -3px rgb(0 0 0 / 10%);
    transition-duration: 300ms;
    font-size: 1.8rem;

    svg {
      color: ${theme.palette.primary.light};
    }

    z-index: 1;
    :hover {
      transform: translateY(-3px);
      transition-duration: 300ms;
      cursor: pointer;
    }
  `,
  toolbar: css`
    padding: 0 120px;
    box-shadow: inset 0px 2px 4px 0px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  `,
  links: css`
    display: flex;
    flex-direction: row;
    gap: 16px;
  `,
  link: css`
    transition-duration: 300ms;

    :hover {
      transition-duration: 300ms;
      transform: scale(1.1);
    }
  `,
});

export const Footer = (props: { pages: string[] }) => {
  const { pages } = props;
  const styles = useStyles(footerStyles);
  const { t } = useTranslation();

  // TODO: scroll into view.

  return (
    <footer className={styles.root}>
      <div className={styles.buttonWrapper}>
        <MaterialLink className={styles.goUpButton} href="#top">
          <KeyboardArrowUpIcon />
        </MaterialLink>
      </div>
      <div className={styles.toolbar}>
        <Link to="/" style={{ textDecoration: "none" }} className={styles.link}>
          {`© ${new Date().getFullYear()} Stanislav Sapogov`}
        </Link>

        <Box className={styles.links}>
          {pages.map((page) => (
            <Link
              key={page}
              to={page}
              style={{ textDecoration: "none" }}
              className={styles.link}
            >
              <Typography>{t(`${page}.page-title`)}</Typography>
            </Link>
          ))}
        </Box>
      </div>
    </footer>
  );
};
