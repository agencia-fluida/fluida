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
          fontSize: "80px",
          color: tema.palette.secondary.main,
          textAlign: {
            xs: "center",
            md: "left",
          },
          "&::before": {
            color: "white",
            display: "block",
            content: `"${children}"`,
            marginBottom: "-40px",
            WebkitTextStroke: "2px white",
            WebkitTextFillColor: "transparent",
            zIndex: "2",
          },
          "&::after": {
            color: "white",
            display: "block",
            content: `"${children}"`,
            marginTop: "-40px",
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
