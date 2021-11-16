import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import CartaoBase from "./CartaoBase";

const CartaoSobre = ({ toggleMostrar }) => {
  const tema = useTheme();
  return (
    <>
      <CartaoBase
        sx={{
          marginX: {
            xs: "20px",
            md: "0",
          },
          height: "500px",
          overflow: "scroll",
        }}
      >
        <Paper
          sx={{
            bgcolor: tema.palette.secondary.main,
            width: "15px",
            height: "250px",
            borderRadius: "0",
            position: "absolute",
            top: "40px",
            left: "-15px",
          }}
        />

        <CardContent
          sx={{ padding: "40px", paddingBottom: "60px", paddingTop: "100px" }}
        >
          <Typography>
            A Fluída valoriza e desenvolve a diversidade dentro da comunicação.
          </Typography>

          <Typography mt={2}>
            A agência é um instrumento de mudança para nos aproximarmos cada dia
            mais de um mercado plural e diverso, onde a criatividade e inovação
            surjam da liberdade de ser e se expressar.
          </Typography>

          <Typography mt={2}>
            Através do trabalho e da educação queremos dar mais espaço à
            produção de mulheres, negres e LGBTQIA+.
          </Typography>

          <Box
            sx={{
              marginTop: "50px",
            }}
          >
            <Typography>
              Aqui propomos uma nova forma de organização com um formato fluído
              de trabalho, sem hierarquia, onde pessoas não são colocadas em
              caixinhas. Os nossos projetos são cocriados com nosses
              profissionais flutuantes, e o mais importante são as competências
              agregadas para resultados estratégicos e de alta performance.
            </Typography>

            <Typography mt={2}>
              São diversas áreas do conhecimento trocando experiências e
              explorando suas habilidades coletivamente.
            </Typography>

            <Typography mt={2}>
              Por isso, conseguimos ter equipes de especialistas totalmente
              adaptável às necessidades de cada projeto e cliente, desenvolvendo
              um trabalho mais dinâmico e criativo, permitindo a troca real
              entre indivíduos e a experimentação como forma de inovação.
            </Typography>
          </Box>
        </CardContent>

        {/* <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: "-30px",
            bgcolor: tema.palette.background.default,
            elevation: 0,
            border: "2px solid #fff",
            paddingY: "10px",
            paddingX: "30px",
            fontSize: "18px",
            fontWeight: "700",
          }}
          onClick={toggleMostrar}
        >
          Saiba mais
        </Button> */}
      </CartaoBase>
    </>
  );
};

export default CartaoSobre;
