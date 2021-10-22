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
            "-webkit-text-stroke": "2px white",
            "-webkit-text-fill-color": "transparent",
            zIndex: "2",
          },
          "&::after": {
            color: "white",
            display: "block",
            content: `"${children}"`,
            marginTop: "-80px",
            "-webkit-text-stroke": "3px white",
            "-webkit-text-fill-color": "transparent",
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
