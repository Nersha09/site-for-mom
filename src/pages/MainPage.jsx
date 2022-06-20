import React from 'react';
import {Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MySlider from '../UI/slider/MySlider';
import {sliderPic} from '../img/picForSlider/picForSlider';

const MainPage = () => {
  const navigate = useNavigate();
  return(
    <div >
      <Box 
        sx={{
          bgcolor: '#FFFFF0',
          borderRadius: '15px',
          minHeight: '100vh', 
          boxShadow: '0 0 5px #888', 
          mt:'20px', 
          mb: '10px'}}>
            <MySlider/>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '50px'}}>
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
    </div>
  )
}
export default MainPage;