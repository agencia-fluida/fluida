import { CardContent, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import CartaoBase from "./CartaoBase";

const CartaoDetalhes = () => {
  const tema = useTheme();
  return (
    <>
      <CartaoBase>
        <CardContent sx={{ padding: "40px" }}>
          <Typography>
            Aqui propomos uma nova forma de organização com um formato fluído de
            trabalho, sem hierarquia, onde pessoas não são colocadas em
            caixinhas. Os nossos projetos são cocriados com nosses profissionais
            flutuantes, e o mais importante são as competências agregadas para
            resultados estratégicos e de alta performance.
          </Typography>

          <Typography mt={2}>
            São diversas áreas do conhecimento trocando experiências e
            explorando suas habilidades coletivamente.
          </Typography>

          <Typography mt={2}>
            Por isso, conseguimos ter equipes de especialistas totalmente
            adaptável às necessidades de cada projeto e cliente, desenvolvendo
            um trabalho mais dinâmico e criativo, permitindo a troca real entre
            indivíduos e a experimentação como forma de inovação.
          </Typography>
        </CardContent>
      </CartaoBase>
    </>
  );
};

export default CartaoDetalhes;
