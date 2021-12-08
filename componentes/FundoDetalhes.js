import { Box } from "@mui/material";

import Image from "next/image";

const FundoDetalhes = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          "& > div": {
            position: "unset !important",
          },
        }}
      >
        <Image
          src="/img/sobreFluida.png"
          alt="Fundo azul"
          layout="fill"
          className="custom-img"
        />
      </Box>
    </>
  );
};

export default FundoDetalhes;
