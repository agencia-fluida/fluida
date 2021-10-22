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
          fontSize: "150px",
          color: tema.palette.secondary.main,
          "&::before": {
            color: "white",
            display: "block",
            content: `"${children}"`,
            marginBottom: "-80px",
            WebkitTextStroke: "2px white",
            WebkitTextFillColor: "transparent",
            zIndex: "2",
          },
          "&::after": {
            color: "white",
            display: "block",
            content: `"${children}"`,
            marginTop: "-80px",
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
