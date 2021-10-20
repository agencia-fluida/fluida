import { createTheme } from "@mui/material/styles";

const tema = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#262626",
    },
    primary: {
      main: "#797ef6",
    },
    secondary: {
      main: "#7dd6f6",
    },
  },
  typography: {
    fontFamily: "padrao",
  },
});

export default tema;
