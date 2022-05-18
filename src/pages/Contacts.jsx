import React from 'react';
import { Container } from '@mui/material';

const Contacts = () => {
  return(
    <div>
         <Container
            sx={{
            maxWidth: 'lg',
            bgcolor: '#FFFFF0',
            border: '1px 0 0 1px solid #A9A9A9', 
            borderRadius: '15px',
            minHeight: '130vh', 
            boxShadow: '0 0 5px #888', 
            mt:'20px', 
            mb: '10px'}}>
                страница с контактами   
        </Container>
        
    </div>
  )
}
export default Contacts;