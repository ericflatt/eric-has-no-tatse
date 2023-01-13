import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


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
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
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

          <textarea id="textarea" name="anything else" rows="4" placeholder="anything else?"></textarea>

          <input className="submit-button" type="submit" value="submit" />
        </form>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}