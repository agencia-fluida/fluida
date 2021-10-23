import { useState } from "react";

import { Box, Card, CardContent, Typography, Button } from "@mui/material";

import { useTheme } from "@emotion/react";

import TituloSobre from "./TituloSobre";
import CartaoSobre from "./CartaoSobre";
import CartaoDetalhes from "./CartaoDetalhes";
import FundoDetalhes from "./FundoDetalhes";

const Sobre = () => {
  const tema = useTheme();

  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const toggleMostrar = () => {
    setMostrarDetalhes((atual) => !atual);
  };

  return (
    <>
      <Box sx={{ margin: "auto", marginY: "100px" }}>
        <TituloSobre />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
            maxWidth: "xl",
          }}
        >
          <CartaoSobre toggleMostrar={toggleMostrar} />

          {mostrarDetalhes ? <CartaoDetalhes /> : <FundoDetalhes />}
        </Box>
      </Box>
    </>
  );
};

export default Sobre;
