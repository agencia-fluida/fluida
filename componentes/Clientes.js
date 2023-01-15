import Image from "next/image";

import { Typography, Box } from "@mui/material";

const Clientes = () => {
  const clientes = [
    {
      nome: "Creamy",
      imagem: "/img/clientes/creamy.png",
    },
    {
      nome: "Mikasa",
      imagem: "/img/clientes/mikasa.png",
    },
    {
      nome: "Nova Brasil",
      imagem: "/img/clientes/novabrasil.png",
    },
    {
      nome: "O Boticário",
      imagem: "/img/clientes/boticario.png",
    },
    {
      nome: "Vogue",
      imagem: "/img/clientes/vogue.png",
    },
    {
      nome: "Sofá Digital",
      imagem: "/img/clientes/sofa.png",
      css: {
        filter: 'grayscale(1)'
      }
    },
    {
      nome: "Warren",
      imagem: "/img/clientes/warren.png",
    },
    {
      nome: "Novotel",
      imagem: "/img/clientes/novotel.svg",
      css: {
        filter: 'brightness(0) invert(1)'
      }
    },
    {
      nome: "Grand Mercure",
      imagem: "/img/clientes/grand-mercure.png",
      css: {
        filter: 'grayscale(1)'
      }
    },
    {
      nome: "Ibis",
      imagem: "/img/clientes/ibis.png",
      css: {
        filter: 'grayscale(1)'
      }
    },
  ];
  return <>
    <Box sx={{ maxWidth: "lg", margin: "auto" }}>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          fontFamily: "fluido",
          fontSize: "80px",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Clientes
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "50px",
          marginTop: "50px",
        }}
      >
        {clientes.map((cliente, index) => (
          <Box
            key={index}
            sx={{
              flex: {
                xs: "0 0 calc(50% - 60px)",
                md: "0 0 calc(25% - 60px)",
              },
              margin: "30px",
            }}
          >
            <Image
              src={cliente.imagem}
              alt={cliente.nome}
              width={200}
              height={200}
              style={{
                maxWidth: "100%",
                height: "auto",
                ...cliente.css
              }} />
          </Box>
        ))}
      </Box>
    </Box>
  </>;
};

export default Clientes;
