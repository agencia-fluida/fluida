import { Typography } from "@mui/material";

const TituloFormulario = ({ children }) => {
  return (
    <>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          fontFamily: "liquido",
          fontSize: "80px",
          textAlign: "center",
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default TituloFormulario;
