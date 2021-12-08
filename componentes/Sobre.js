import { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@emotion/react";

import TituloSobre from "./TituloSobre";
import CartaoSobre from "./CartaoSobre";
import CartaoDetalhes from "./CartaoDetalhes";
import FundoDetalhes from "./FundoDetalhes";
import InfoModal from "./InfoModal";

const Sobre = () => {
  const tema = useTheme();
  const mobile = !useMediaQuery(tema.breakpoints.up("md"));

  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const toggleMostrar = () => {
    setMostrarDetalhes((atual) => !atual);
  };

  return (
    <>
      <InfoModal open={mobile && mostrarDetalhes} onClose={toggleMostrar}>
        <Typography>
          Aqui propomos uma nova forma de organização com um formato fluído de
          trabalho, sem hierarquia, onde pessoas não são colocadas em caixinhas.
          Os nossos projetos são cocriados com nosses profissionais flutuantes,
          e o mais importante são as competências agregadas para resultados
          estratégicos e de alta performance.
        </Typography>

        <Typography mt={2}>
          São diversas áreas do conhecimento trocando experiências e explorando
          suas habilidades coletivamente.
        </Typography>

        <Typography mt={2}>
          Por isso, conseguimos ter equipes de especialistas totalmente
          adaptável às necessidades de cada projeto e cliente, desenvolvendo um
          trabalho mais dinâmico e criativo, permitindo a troca real entre
          indivíduos e a experimentação como forma de inovação.
        </Typography>
      </InfoModal>
      <Box sx={{ margin: "auto", marginY: "100px" }}>
        <TituloSobre />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            alignItems: "start",
            maxWidth: "xl",
            marginTop: "100px",
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
