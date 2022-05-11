import { TextField } from '@mui/material';
import React from 'react';

const MyInput = (props) => {
  return(
    <TextField
      sx={{
        '& .MuiTextField-root': {mt: '15px'},
      }}
      size='small'
      {...props}
      id="outlined-basic" 
      
    />
  );
};
export default MyInput;