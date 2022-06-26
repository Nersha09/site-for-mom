import React from 'react';
import {AppBar, Toolbar, Typography, Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import slider from './../../img/main4.jpg';
import { Link } from 'react-router-dom';

const MyAppBar = ({hendleCart}) => {
  return(
      <Box sx={{flexGrow: 1}}>
        <AppBar position='static' sx={{bgcolor: "white", boxShadow: 'none'}} >
            <Toolbar>
              <IconButton
                onClick={hendleCart}
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}>
                  <MenuIcon fontSize="large"/>
              </IconButton>
              <Link to='/' style={{textDecoration: 'none'}}>
                <Typography 
                  variant='h4'
                  component="span"
                  style={{marginLeft: '40px', color: 'grey'}}
                >
                 КотоПёс
                </Typography>
              </Link>
            </Toolbar>
            <img className='main_page_photo' src={slider}/>
        </AppBar> 
      </Box>
  
  )
}
export default MyAppBar;