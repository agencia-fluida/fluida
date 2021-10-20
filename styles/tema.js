import { createTheme } from "@mui/material/styles";

const tema = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#262626",
    },
    primary: "#797ef6",
    secondary: "#7dd6f6",
  },
  typography: {
    fontFamily: "padrao",
  },
});

export default tema;
