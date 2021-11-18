import { Container, Box, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

import Flutuante from "./Flutuante";

const Flutuantes = () => {
  const tema = useTheme();

  const flutuantes = [
    {
      nome: "Bianca Guedes",
      descricao: "CEO e especialista em branded content e influência",
      foto: "/img/flutuantes/BiancaGuedes.jpg",
    },
    {
      nome: "Beatriz Faria",
      descricao: "relações públicas",
      foto: "/img/flutuantes/BeatrizFaria.jpg",
    },
    {
      nome: "Sam Marcelao",
      descricao: "videomaker e diretor de pós-produção",
      foto: "/img/flutuantes/SamMarcelao.jpg",
    },
    {
      nome: "Fernanda Goncalves",
      descricao: "roteirista e diretora de cinema",
      foto: "/img/flutuantes/FernandaGoncalves.jpeg",
    },
    {
      nome: "Paty Santos",
      descricao: "diretora de fotografia e produção audiovisual",
      foto: "/img/flutuantes/PatySantos.jpeg",
    },
    {
      nome: "Flávia Guitarra",
      descricao: "estrategista e produtora de conteúdo",
      foto: "/img/flutuantes/FlaviaGuitarrara.jpeg",
    },
    {
      nome: "Paula Diniz",
      descricao: "especialista em tráfego e mídia",
      foto: "/img/flutuantes/PaulaDiniz.jpg",
    },
    {
      nome: "Clarissa Carvalho",
      descricao: "Comercial",
      foto: "/img/flutuantes/ClarissaCarvalho.png",
    },
    {
      nome: "Larissa Barbosa",
      descricao: "Webdesigner e programadora",
      foto: "/img/flutuantes/LarissaBarbosa.jpg",
    },
    {
      nome: "Carol Soares",
      descricao: "cinegrafista e produção audiovisual",
      foto: "/img/flutuantes/carol.jpg",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          alignSelf: "center",
          marginTop: "100px",
          paddingX: {
            xs: "20px",
            md: "0",
          },
        }}
      >
        <Box
          sx={{
            transform: "rotate(-90deg)",
            position: "absolute",
            left: "-600px",
            top: "45%",
            zIndex: "2",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: "fluido",
              WebkitTextStroke: `2px ${tema.palette.secondary.main}`,
              WebkitTextFillColor: "transparent",
              fontSize: "175px",
              "&::after": {
                content: `"Flutuantes"`,
                marginLeft: "50px",
              },
            }}
          >
            Flutuantes
          </Typography>
        </Box>

        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "fluido",
            fontSize: "80px",
            display: {
              xs: "block",
              md: "none",
            },
            textAlign: "center",
            marginBottom: "-60px",
          }}
        >
          Flutuantes
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridGap: "20px",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr 1fr",
            },
            marginTop: "100px",
            zIndex: "1",
          }}
        >
          {flutuantes.map((flutuante, index) => (
            <Flutuante
              key={index}
              nome={flutuante.nome}
              descricao={flutuante.descricao}
              foto={flutuante.foto}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Flutuantes;
