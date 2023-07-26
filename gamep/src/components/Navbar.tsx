
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #d81fc5',
    boxShadow: 24,
    p: 3,
  };

const Navbar=(props:any)=>{
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return(
        <div className="navbar">
            <ul className='navbar-links'>
            <Button onClick={handleOpen}  className='navbar-link'>{props.help}</Button>
            <a href="/" className="navbar-link">{props.home}</a>
                
            </ul>

            <div>
 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='close-icon'>
            <CloseIcon  onClick={handleClose}/>
            </div>
      
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </Typography>
          <div className="tb">
          <div className="btn-containers">
    <button className='btns btn-md'>Play Now</button>
</div>
          </div>
   
        </Box>
      </Modal>
    </div>

        </div>
    )
}
export default Navbar;