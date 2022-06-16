import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" component="h2">
        {t("home.title")}
      </Typography>
      Тут какую-нибудь фотку с кратким описанием того, что происходит
    </>
  );
};
