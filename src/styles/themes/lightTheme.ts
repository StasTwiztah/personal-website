import { css } from "@emotion/css";
import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {},
  palette: {
    primary: {
      main: "#45445b",
      dark: "#2A2F3F",
      light: "#A1A1A1",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
  },
});
