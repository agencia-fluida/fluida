import { Box } from "@mui/material";

import Image from "next/image";

const FundoDetalhes = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          alignSelf: "stretch",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "40px",
            left: "0",
            zIndex: "2",
          }}
        >
          <Image
            src="/img/sobre/meninaListras.jpg"
            alt="Menina listras"
            width={400}
            height={250}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            zIndex: "1",
          }}
        >
          <Image
            src="/img/servicos/fundo.jpg"
            alt="Fundo azul"
            width={400}
            height={250}
          />
        </Box>
      </Box>
    </>
  );
};

export default FundoDetalhes;
