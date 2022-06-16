import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Career = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" component="h2">
        {t("career.title")}
      </Typography>
      Тут про каждую компанию с примерами и фотками
    </>
  );
};
