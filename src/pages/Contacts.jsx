import React from 'react';
import { Box } from '@mui/material';
import { flexbox } from '@mui/system';

const Contacts = () => {
  return(
    <div>
        <Box 
             sx={{
          bgcolor: '#FFFFF0',
          borderRadius: '15px',
          minHeight: '100vh', 
          boxShadow: '0 0 5px #888', 
          mt:'20px', 
          mb: '10px'}} 
            >
              <p style={{textAlign: 'center', color:'#DEB887', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', padding: '50px'}}>
                <h1> На этой странице должен быть красиво оформленный текст с контантами. Но его нет:)</h1>
              </p>
              
        </Box>
        
    </div>
  )
}
export default Contacts;