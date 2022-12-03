import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import useFormatContent from '../hooks/useFormatContent';
import { useStoreControl } from '../hooks/useStoreControl';
import { useEffect } from 'react';



const Details = () => {
    const {selectedUser}:any=useStoreControl()
    const DetailsContent=useFormatContent(selectedUser)


    return (
        <Box className='detailsBox'>
              <div className='container-image'>
                  <img src={selectedUser.image} alt="" />
                </div>
            <Paper className='paper-details' elevation={0} >
             <DetailsContent />
            
                
            </Paper>
            
        </Box>
    )
}

export default Details
