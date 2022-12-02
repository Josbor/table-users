import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import useFormatContent from '../hooks/useFormatContent';



const Details = () => {
    return (
        <Box className='detailsBox'>
            <Paper elevation={3} >
                <Typography variant="h6" component="h2">
                    <p>this is a details</p>
                </Typography>
            </Paper>
        </Box>
    )
}

export default Details
