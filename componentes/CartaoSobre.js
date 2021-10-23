import { Card, CardContent, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const CartaoSobre = () => {
  const tema = useTheme();
  return (
    <>
      <Card
        sx={{
          border: "2px solid white",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        <CardContent sx={{ padding: "30px" }}>
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
        </CardContent>

        <Button
          variant="contained"
          sx={{
            position: "relative",
            top: "20px",
            bgcolor: tema.palette.background.default,
            elevation: 0,
            border: "2px solid #fff",
            paddingY: "10px",
            paddingX: "30px",
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          Saiba mais
        </Button>
      </Card>
    </>
  );
};

export default CartaoSobre;
