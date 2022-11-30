import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ModalDetails = (props:any) => {
  const [modal,setModal]=useState(true)
  const handleClose=()=>{
    setModal(false)
    props.setModal(false)
  }

 
  return (
    
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
          <Typography variant="h6" component="h2">
           this is the modal
          </Typography>
         
        </Box>
      </Modal>
   
  )
}

export default ModalDetails
