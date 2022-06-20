import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const MyRadio = ({onChange}) => {

  return(
    <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"/> 
            <RadioGroup 
                onChange={e => onChange(e.target.value)}
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"> 
                    <FormControlLabel value={0} label='Потеряшки' control={<Radio/>}/>
                    <FormControlLabel value={1} label='Найденыши' control={<Radio/>}/>
                    <FormControlLabel value={2} label='Ищут новый дом' control={<Radio/>}/>
          </RadioGroup> 
    </FormControl>
  )
}
export default MyRadio;