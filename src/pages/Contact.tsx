import { css } from "@emotion/css";
import { Box, Grow, Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useStyles } from "../styles/hooks/useStyles";

const contactStyles = () => ({
  logos: css`
    flex: 1;
    padding: 80px 192px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `,
  link: css`
    flex: 1;
    text-align: center;
  `,
  logo: css`
    max-height: 180px;
    transition-duration: 300ms;
    :hover {
      transform: scale(1.2);
      transition-duration: 300ms;
      opacity: 0.9;
    }
  `,
});

export const Contact = () => {
  const styles = useStyles(contactStyles);
  const { t } = useTranslation();

  const links = ["linkedin", "telegram", "facebook", "instagram"];

  return (
    <>
      <Typography variant="h1" component="h2">
        {t("contact.title")}
      </Typography>
      <div className={styles.logos}>
        {links.map((item, index) => (
          <Grow in timeout={(index + 2) * 500}>
            <Link to="" key={item} className={styles.link}>
              <img
                src={`/assets/images/${item}-logo.svg`}
                className={styles.logo}
              />
            </Link>
          </Grow>
        ))}
      </div>
    </>
  );
};
