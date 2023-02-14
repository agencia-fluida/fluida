import { createTheme } from "@mui/material/styles";

const tema = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#262626",
    },
    primary: {
      main: "#833CFC",
    },
    secondary: {
      main: "#D5FF1F",
    },
  },
  typography: {
    fontFamily: "padrao",
  },
});

export default tema;
