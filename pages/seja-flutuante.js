import { Box, TextField, Button, Typography } from "@mui/material";
import InputMask from "react-input-mask";

const SejaFlutuante = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "md",
          margin: "auto",
        }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "liquido",
            fontSize: "80px",
            textAlign: "center",
          }}
        >
          Seja uma flutuante
        </Typography>

        <Typography
          variant="h1"
          component="h2"
          mt={2}
          sx={{
            fontFamily: "liquido",
            fontSize: "35px",
            textAlign: "center",
          }}
        >
          Se identificou com a nossa agência e quer fazer parte da nossa equipe?
          <br />
          Você será muito bem-vinde!
        </Typography>

        <Box
          component="form"
          name="seja-flutuante"
          sx={{
            marginTop: "50px",
            paddingX: {
              xs: "30px",
              md: "0",
            },
          }}
          data-netlify="true"
          method="POST"
          action="/sucesso"
        >
          <input type="hidden" name="form-name" value="seja-flutuante" />

          <TextField
            variant="outlined"
            label="Nome completo"
            placeholder="Larissa Barbosa Freitas"
            name="nome"
            sx={{ width: "100%" }}
            required
          />

          <TextField
            variant="outlined"
            name="e-mail"
            type="email"
            label="E-mail"
            placeholder="seu.email@gmail.com"
            sx={{ marginTop: 2, width: "100%" }}
            required
          />

          <InputMask
            mask="(99) 99999-9999"
            maskChar="_"
            variant="outlined"
            name="telefone"
            label="Telefone"
            helperText="Não esqueça de incluir o DDD"
            sx={{ marginTop: 2, width: "100%" }}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            required
          >
            {(props) => <TextField {...props} />}
          </InputMask>

          <TextField
            variant="outlined"
            label="Link do seu portfólio"
            name="link-portfolio"
            sx={{ marginTop: 2, width: "100%" }}
            required
          />

          <TextField
            variant="outlined"
            name="mensagem"
            label="Mensagem"
            sx={{ marginTop: 3, width: "100%" }}
            multiline
            minRows={3}
            required
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "100%",
              marginTop: 2,
              paddingY: "15px",
              fontSize: "15px",
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SejaFlutuante;
