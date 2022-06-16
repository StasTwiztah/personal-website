import { css } from "@emotion/css";
import { Grow, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useStyles } from "../styles/hooks/useStyles";

const contactStyles = () => ({
  content: css`
    display: flex;
    flex-direction: row;
    > * {
      flex: 1;
    }
  `,
  logos: css`
    padding: 40px;
    display: flex;
    flex-direction: row;
    gap: 16px;
  `,
  link: css`
    flex: 1;
    text-align: center;
    text-decoration: none;

    transition-duration: 300ms !important;
    :hover {
      transform: scale(1.1) !important;
      transition-duration: 300ms !important;
      opacity: 0.9 !important;
    }
  `,
  logo: css`
    max-height: 80px;
  `,
});

export const Contact = () => {
  const styles = useStyles(contactStyles);
  const { t } = useTranslation();

  const links = ["linkedin", "telegram", "facebook", "instagram"];
  const urls: Record<string, string> = {
    linkedin: "https://www.linkedin.com/in/stanislav-sapogov",
    telegram: "https://t.me/twiztagram",
    facebook: "https://www.facebook.com/stastwiztah",
    instagram: "https://www.instagram.com/twiztagram",
  };

  return (
    <>
      <Typography variant="h2" component="h2">
        {t("contact.title")}
      </Typography>
      <Typography>{t("contact.description")}</Typography>
      <div className={styles.logos}>
        {links.map((item, index) => (
          <Grow in timeout={(index + 2) * 500}>
            <Link
              href={urls?.[item] || ""}
              key={item}
              className={styles.link}
              target="_blank"
            >
              <img
                src={`/assets/images/${item}-logo.svg`}
                className={styles.logo}
                alt={`${item} logo`}
              />
            </Link>
          </Grow>
        ))}
      </div>
    </>
  );
};
