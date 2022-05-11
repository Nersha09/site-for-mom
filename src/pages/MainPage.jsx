import React from 'react';
import slider from './../img/slider.jpg'
import { Container, Box, Button } from '@mui/material';

const MainPage = () => {
  return(
    <div >
        <img className='main_page_photo' src={slider}/>
        <Container maxWidth="lg">
          <Box
            style={{
              background: 'white',
              border: '1px 0 0 1px solid #A9A9A9', 
              borderRadius: '15px',
              minHeight: '80vh', 
              boxShadow: '0 0 5px #888', 
              // mt:'20px', 
              mb: '10px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', padding: '80px'}}>
              <Button variant='outlined' size='large'>У меня потерялся друг</Button>
              <Button variant='outlined' size='large'>Я нашел чужого друга</Button>
            </div>
          </Box>

        </Container>
    </div>
  )
}
export default MainPage;