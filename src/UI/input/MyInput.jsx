import {Box, Input, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const MyInput = ({onChange}) => {
  return(
    <Box component="form"
      sx={{
        '& > :not(style)': { m: 1, maxWidth: '170px' },
      }}
      noValidate
      autoComplete="off">
        <Input 
          placeholder='Поиск'
          onChange={e => onChange(e.target.value)}
          startAdornment={
            <InputAdornment position='start'>
              <SearchIcon/>
            </InputAdornment>
          }
        />
    </Box>

  );
};
export default MyInput;