import React from 'react';
import {AppBar, Toolbar, Typography, Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MyAppBar = ({hendleCart}) => {
  return(
      <Box sx={{flexGrow: 1}} className='navbar'>
        {/* <AppBar  position= 'static' style={{backgroundColor: "white"}} > */}
            <Toolbar>
              <IconButton
                onClick={hendleCart}
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon fontSize="large"/>
              </IconButton>
                <Typography 
                  variant='h4'
                  component="span"
                  style={{marginLeft: '40px', color: 'grey'}}
                >
                  Mamin Site
                </Typography>
            </Toolbar>
        {/* </AppBar>  */}
      </Box>
  
  )
}
export default MyAppBar;