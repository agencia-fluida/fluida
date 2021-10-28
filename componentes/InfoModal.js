import {
  Modal,
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const InfoModal = ({ open, onClose, children }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "30px",
        }}
      >
        <Box>
          <Card>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                paddingTop: "10px",
                paddingRight: "10px",
              }}
            >
              <IconButton aria-label="close" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <CardContent sx={{ paddingX: "30px" }}>{children}</CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
};

export default InfoModal;
