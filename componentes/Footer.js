import Link from "next/link";

import { Box, Typography, Button, IconButton } from "@mui/material";
import { Instagram, WhatsApp, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          borderTop: "2px solid #fff",
          marginX: "30px",
          paddingY: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <a
            href="https://www.instagram.com/ag.fluida/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="Instagram">
              <Instagram fontSize="large" />
            </IconButton>
          </a>

          <a href="https://wa.me/+5511970241683" target="_blank" rel="noopener">
            <IconButton aria-label="WhatsApp">
              <WhatsApp fontSize="large" />
            </IconButton>
          </a>

          <a
            href="https://www.linkedin.com/company/ag%C3%AAncia-flu%C3%ADda/?viewAsMember=true"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="LinkedIn">
              <LinkedIn fontSize="large" />
            </IconButton>
          </a>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "30px" }}>
          <Typography>Fluída</Typography>
          <Typography mt={1}>São Paulo - BR</Typography>
          <Typography mt={1}>E-mail: ola@agenciafluida.com.br</Typography>
          <Typography mt={1}>WhatsApp: 11 97024-1683</Typography>
        </Box>

        <Box sx={{ marginTop: "50px" }}>
          <Link href="/briefing">
            <Button
              variant="contained"
              sx={{
                background: "none",
                border: "2px solid #fff",
                fontSize: {
                  xs: "15px",
                  md: "20px",
                },
                paddingX: "40px",
                paddingY: "15px",
              }}
            >
              Mande o seu briefing
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
