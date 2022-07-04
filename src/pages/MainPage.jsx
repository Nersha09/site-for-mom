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
            <div style={{ display: 'flex', justifyContent: 'center', margin: '5%'}}>
              <Button 
                style={{
                  maxWidth: '250px',
                  maxHeight: '150px',
                  width: '40%', 
                  height: 'auto',  
                  backgroundColor: '#D2691E', 
                  fontSize: '85%'}} 
                variant='contained' 
                size='large'
                onClick={() => navigate('/announcements/?found=0')}>
                    У меня потерялся друг
              </Button>
              <Button 
                style={{
                  marginLeft: '5%', 
                  maxWidth: '250px',
                  maxHeight: '150px',
                  minHeight: '100px',
                  width: '40%', 
                  height: 'auto',  
                  backgroundColor: '#A52A2A', 
                  fontSize: '85%'}} 
                variant='contained' size='large'
                onClick={() => navigate('/announcements/?found=0')}>
                  Я нашел чужого друга
              </Button>
            </div>
        </div>
  )
}
export default MainPage;