import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const TextoFluido = ({ children }) => {
  const tema = useTheme();
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "fluido",
          fontSize: {
            xs: "80px",
            md: "120px",
          },
          color: tema.palette.secondary.main,
          textAlign: {
            xs: "center",
            md: "left",
          },
          "&::before": {
            color: "white",
            display: "block",
            content: `"${children}"`,
            marginBottom: {
              md: "-60px",
              xs: "-40px",
            },
            WebkitTextStroke: "2px white",
            WebkitTextFillColor: "transparent",
            zIndex: "2",
          },
          "&::after": {
            color: "white",
            display: "block",
            content: `"${children}"`,
            marginTop: {
              xs: "-40px",
              md: "-60px",
            },
            WebkitTextStroke: "3px white",
            WebkitTextFillColor: "transparent",
            zIndex: "2",
          },
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default TextoFluido;
