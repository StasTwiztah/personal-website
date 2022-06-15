import { createTheme } from "@mui/material";
import { common } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: common.white,
    },
    background: {
      default: common.black,
    },
  },
});
