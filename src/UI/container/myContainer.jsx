import React from 'react';
import { Container, Box } from '@mui/material';

const MyContainer = () => {
  return(
      // <div>
         <Container maxWidth='lg'>
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                bgcolor: '#FFFFE0',
                border: '1px 0 0 1px solid #A9A9A9', 
                borderRadius: '15px',
                minHeight: '100vh', 
                boxShadow: '0 0 5px #888', 
                mt:'20px', 
                mb: '10px'}}
            />
        </Container> 
      // </div>
    
  )
}
export default MyContainer;