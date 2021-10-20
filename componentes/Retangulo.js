import { Paper } from "@mui/material";
import { useTheme } from "@emotion/react";

const Retangulo = ({ esquerda }) => {
  const tema = useTheme();

  return (
    <>
      <Paper
        sx={{
          width: "80px",
          height: "30px",
          bgcolor: tema.palette.secondary.main,
          borderRadius: "0",
          alignSelf: esquerda ? "end" : "start",
        }}
      />
    </>
  );
};

export default Retangulo;
