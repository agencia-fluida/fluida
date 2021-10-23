import { useState } from "react";

import { Box, Card, CardContent, Typography, Button } from "@mui/material";

import { useTheme } from "@emotion/react";

import CartaoSobre from "./CartaoSobre";
import CartaoDetalhes from "./CartaoDetalhes";

const Sobre = () => {
  const tema = useTheme();

  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const toggleMostrar = () => {
    setMostrarDetalhes((atual) => !atual);
  };

  return (
    <>
      <Box sx={{ maxWidth: "md", margin: "auto", marginY: "100px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "30px",
            alignItems: "start",
          }}
        >
          <CartaoSobre toggleMostrar={toggleMostrar} />

          {mostrarDetalhes ? <CartaoDetalhes /> : <></>}
        </Box>
      </Box>
    </>
  );
};

export default Sobre;
