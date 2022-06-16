import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" component="h2">
        {t("about.title")}
      </Typography>
      Обо мне: где учился, по каждой технологии количество лет
    </>
  );
};
