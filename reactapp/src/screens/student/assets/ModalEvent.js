import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'

const style = {
  modalBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
  },
  button: {
    background: "primary",
    borderRadius: 10,
    boxShadow: "3px 3px 0 0 rgb(0,0,0)"
  }
};

export default function ModalEvent({ eventTitle, eventDate }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const closeModalHandler = () => {
    setOpen(false)
  }

  // Event Form
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')

  // Submit Form
  const submitForm = async () => {
    await fetch('event/add-participant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `eventTitle=${eventTitle}&name=${name}&surname=${surname}&email=${email}&telephone=${telephone}`
    });
  }

  return (
    <div>

      <Button variant="contained" style={style.button} onClick={handleOpen}>Participer</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style.modalBox}>
          <FontAwesomeIcon sx={{ color: 'text.primary' }} icon={faRectangleXmark} size='lg' style={{ position: 'absolute', right: '1rem', top: '1rem', cursor: 'pointer' }}
            onClick={() => { closeModalHandler() }} />

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <h6>Participer à la sortie</h6>
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 1 }}>
            <h6>{eventTitle}</h6>
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 1 }}>
            <h6> Le {eventDate}</h6>
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="Nom" variant="outlined"
              onChange={(e) => setName(e.target.value)} />
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="Prénom" variant="outlined"
              onChange={(e) => setSurname(e.target.value)} />
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="Email" variant="outlined"
              onChange={(e) => setEmail(e.target.value)} />
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="Téléphone" variant="outlined"
              onChange={(e) => setTelephone(e.target.value)} />
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <Button variant="contained" onClick={() => submitForm()}>Valider</Button>
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}