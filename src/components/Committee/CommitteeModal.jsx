import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  bgcolor: "#313131",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CommitteeModal = ({ open, setOpen, committee }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ color: "#4E9F3D" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {committee?.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, color: "#fff" }}>
          {committee?.body}
        </Typography>
        <Accordion sx={{bgcolor: "#313131",color: '#fff',boxShadow: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#fff'}} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{fontWeight: '600',padding: 0, color: "#4E9F3D" }}
          >
            AGENDA
          </AccordionSummary>
          <AccordionDetails sx={{padding: 0}}>
            Releasing soon
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{bgcolor: "#313131",color: '#fff',boxShadow: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#fff'}} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{fontWeight: '600',padding: 0, color: "#4E9F3D" }}
          >
            EBs
          </AccordionSummary>
          <AccordionDetails sx={{padding: 0}}>
            Releasing soon
          </AccordionDetails>
        </Accordion>
      </Box>
    </Modal>
  );
};

export default CommitteeModal;
