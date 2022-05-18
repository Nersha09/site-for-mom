import React from 'react';
import {AppBar, Toolbar, Typography, Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import slider from './../img/main4.jpg';
import { Link } from 'react-router-dom';

const MyAppBar = ({hendleCart}) => {
  return(
      <Box sx={{flexGrow: 1}} className='navbar'>
        <AppBar  position= 'static' style={{backgroundColor: "white"}} >
        
            <Toolbar>
              <IconButton
                onClick={hendleCart}
                edge="start"
                // color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon fontSize="large"/>
              </IconButton>
              <Link to='/main' style={{textDecoration: 'none'}}>
                <Typography 
                  variant='h4'
                  component="span"
                  style={{marginLeft: '40px', color: 'grey'}}
                >
                  Mamin Site
                </Typography>
              </Link>
                
            </Toolbar>
            <img className='main_page_photo' src={slider}/>

        </AppBar> 
      </Box>
  
  )
}
export default MyAppBar;