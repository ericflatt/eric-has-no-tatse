import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";



export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p>want me to review something specific? send me the details <span className="modal-button" onClick={handleOpen}>here</span>.</p>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        
        <Box className="modal">
        <p style={{textAlign:"right",marginBottom:"16px",marginTop:"0",cursor:"pointer",maxWidth:"fit-content",marginLeft:"auto",marginRight:"0"}} onClick={handleClose}>X</p>
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="artist name"
              required
              autoComplete="off"
            />
            <input
              type="text"
              id="name"
              name="album or song name"
              placeholder="album or song name"
              required
              autoComplete="off"
            />
            <input
              type="text"
              id="name"
              name="link"
              placeholder="spotify link"
              required
              autoComplete="off"
            />

            <textarea
              id="textarea"
              name="anything else"
              rows="4"
              placeholder="anything else?"
            ></textarea>

            <input className="submit-button" type="submit" value="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
