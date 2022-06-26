import React from 'react';
import {Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MySlider from '../UI/slider/MySlider';
import {sliderPic} from '../img/picForSlider/picForSlider';

const MainPage = () => {
  const navigate = useNavigate();
  return(
      <div>
            <MySlider/>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '50px'}}>
              <Button 
                style={{
                  width: '250px', 
                  height: '150px', 
                  backgroundColor: '#D2691E', 
                  fontSize: '13pt'}} 
                variant='contained' 
                size='large'
                onClick={() => navigate('/announcements/?found=0')}>
                    У меня потерялся друг
              </Button>
              <Button 
                style={{
                  marginLeft: '50px', 
                  width: '250px', 
                  height: '150px',  
                  backgroundColor: '#A52A2A', 
                  fontSize: '13pt'}} 
                variant='contained' size='large'
                onClick={() => navigate('/announcements/?found=0')}>
                  Я нашел чужого друга
              </Button>
            </div>
        </div>
  )
}
export default MainPage;