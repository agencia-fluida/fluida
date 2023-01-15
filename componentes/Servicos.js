import { useState } from "react";
import Image from "next/image";

import { Container, Box, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";

import TituloServicos from "./TituloServicos";
import CartaoServico from "./CartaoServico";
import InfoModal from "./InfoModal";

const Servicos = () => {
  const tema = useTheme();
  const desktop = useMediaQuery(tema.breakpoints.up("md"));

  const [modalServicos, setModalServicos] = useState(false);
  const [selecionado, setSelecionado] = useState(null);

  const categorias = [
    {
      titulo: "Branding",
      imagem: "/img/servicos/branding.png",
      servicos: [
        "Naming",
        "Identidade visual",
        "Construção estratégica de posicionamento",
        "Brand Persona",
      ],
    },
    {
      titulo: "Social Media",
      imagem: "/img/servicos/social.png",
      servicos: [
        "Planejamento estratégico de conteúdo",
        "Social Listening",
        "Planejamento de campanhas de mídia e tráfego",
        "Construção de blog focado em SEO",
      ],
    },
    {
      titulo: "Branded Content & Entertainment",
      imagem: "/img/servicos/branded.png",
      servicos: [
        "Produção audiovisual de conteúdos educativos e de entretenimento: Web séries; Documentários; Cursos",
        "Short contents para plataformas digitais.",
      ],
    },
    {
      titulo: "Influencer Marketing",
      imagem: "/img/servicos/influencer.png",
      servicos: [
        "Planejamento estratégico de campanha",
        "Definição de objetivos e KPIs",
        "Social Listening",
        "Estratégia de redes",
        "Mapeamento de perfis",
        "Relatórios",
      ],
    },
  ];

  const handleClick = (categoria) => {
    if (desktop) return;

    setSelecionado(categoria);
    setModalServicos(true);
  };

  return <>
    <Box sx={{ marginTop: "00px", maxWidth: "lg", margin: "auto" }}>
      <TituloServicos />

      <InfoModal open={modalServicos} onClose={() => setModalServicos(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={selecionado?.imagem}
            alt={selecionado?.titulo}
            width={100}
            height={100}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              marginTop: "30px",
              color: tema.palette.primary.main,
              fontWeight: "medium",
            }}
          >
            {selecionado?.titulo}
          </Typography>
        </Box>

        <ul style={{ marginTop: "50px" }}>
          {selecionado?.servicos?.map((servico, index) => (
            <li key={index} style={{ marginTop: "10px" }}>
              {servico}
            </li>
          ))}
        </ul>
      </InfoModal>
      <Box
        sx={{
          maxWidth: "xl",
          display: "grid",
          gridTemplateColumns: {
            md: "1fr 1fr 1fr 1fr",
            xs: "1fr 1fr",
          },
          gridGap: "20px",
          margin: "auto",
          marginTop: "100px",
          paddingX: {
            xs: "20px",
            md: "0",
          },
        }}
      >
        {categorias.map((categoria, index) => (
          <CartaoServico
            key={index}
            titulo={categoria.titulo}
            imagem={categoria.imagem}
            servicos={categoria.servicos}
            onClick={() => handleClick(categoria)}
          />
        ))}
      </Box>
    </Box>
  </>;
};

export default Servicos;
