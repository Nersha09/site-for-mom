import React from 'react';
import { Box } from '@mui/material';

const About = () => {
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
                <h1> Давайте предствим, что тут красивая история с разными фотками о том, как появилась идея создать этот проект</h1>
              </p>
          </Box>
       
    </div>
  )
}
export default About;