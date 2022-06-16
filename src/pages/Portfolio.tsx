import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" component="h2">
        {t("portfolio.title")}
      </Typography>
      Проекты, боты
    </>
  );
};
