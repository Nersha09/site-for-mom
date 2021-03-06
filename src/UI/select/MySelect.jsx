import {Box, MenuItem, TextField } from '@mui/material';
import React from "react";


const MySelect = ({defaultValue, options, value, onChange}) => {
    return(
        <Box sx={{
            '& .MuiTextField-root': {mb: '5px', ml: '5px', width: '19ch' },
          }}>
            <TextField
             
                label={defaultValue}
                size= 'small'
                select
                variant='outlined'
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <MenuItem value="sort" disabled>{defaultValue}</MenuItem >
                {options.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                        {option.name}
                    </MenuItem >  
                )}
            </TextField>
        </Box>
        
    )
}

export default MySelect;