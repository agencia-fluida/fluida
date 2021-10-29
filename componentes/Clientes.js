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
    },
    {
      nome: "Warren",
      imagem: "/img/clientes/warren.png",
    },
  ];
  return (
    <>
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
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gridGap: "50px",
          paddingX: "50px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        {clientes.map((cliente, index) => (
          <Box sx={{}}>
            <Image
              key={index}
              src={cliente.imagem}
              alt={cliente.nome}
              width={200}
              height={200}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Clientes;
