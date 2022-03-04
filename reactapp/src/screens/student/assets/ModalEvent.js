import React,{useState,useEffect}from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',

  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ModalEvent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const closeModalHandler = ()=> {
      setOpen (false)
  }

// Event Form
  const [name,setName] = useState ('')
  const [surname, setSurname] = useState ('')
  const [email, setEmail] = useState ('')
  const [telephone, setTelephone] = useState ('')


  
  

  return (
    <div>

      <Button variant="contained" style={ {backgroundColor: '#3FA2B0'}} onClick={handleOpen}>Participer</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <FontAwesomeIcon  icon={faRectangleXmark} size='lg' style={{position:'absolute', right:'1rem',top:'1rem', cursor:'pointer'}}
         onClick = {()=> {closeModalHandler()}}/>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          <TextField id="outlined-basic" label="Nom" variant="outlined" 
          onChange= {(e)=> setName(e.target.value)} />
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          <TextField id="outlined-basic" label="Prénom" variant="outlined"
           onChange= {(e)=> setSurname(e.target.value)}/>
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          <TextField id="outlined-basic" label="Email" variant="outlined"
          onChange= {(e)=> setEmail(e.target.value)}/>
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          <TextField id="outlined-basic" label="Téléphone" variant="outlined"
          onChange= {(e)=> setTelephone(e.target.value)}/>
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          <Button variant="contained" style={ {backgroundColor: '#3FA2B0'}}>Valider</Button>
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}