import React from 'react';
import slider from './../img/main4.jpg';
import { Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return(
    <div >
        {/* <img className='main_page_photo' src={slider}/> */}
        

        <Container maxWidth="lg">
          <Box
            style={{
              background: '#FFFFF0',
              border: '1px 0 0 1px solid #A9A9A9', 
              borderRadius: '15px',
              minHeight: '80vh', 
              boxShadow: '0 0 5px #888', 
              marginTop:'20px', 
              marginBottom: '10px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', padding: '80px'}}>
              <Button 
                variant='outlined' 
                size='large'
                onClick={() => navigate('/lost')}>
                    У меня потерялся друг
              </Button>
              <Button 
                style={{marginLeft: '50px'}} 
                variant='outlined' size='large'
                onClick={() => navigate('/alians_found')}>
                  Я нашел чужого друга
              </Button>
            </div>
          </Box>

        </Container>
    </div>
  )
}
export default MainPage;