import { Box } from "@mui/material";

import Image from "next/image";

const FundoDetalhes = () => {
  return <>
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
        className="custom-img"
        fill
        sizes="100vw" />
    </Box>
  </>;
};

export default FundoDetalhes;
