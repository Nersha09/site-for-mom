import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const MyRadio = ({onChange}) => {
    const options = [
        {value: 0, name: 'Потеряшки'},
        {value: 1, name: 'Найденыши'},
        {value: 2, name: 'Ищут новый дом'}
    ]
    const eee = (e) => {
        console.log(e);
    }
  return(
    
    //   <div>
    //       {options.map(option => {
    //         <input type='radio' name={option.name} key={option.value} value={option.value}/>
    //         // <label>{option.value}</label>
    //       })}
         
    //   </div>
    <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"/> 
            <RadioGroup 
                onChange={e => onChange(e.target.value)}

                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"> 
                {/* {options.map(option => { */}
                    <FormControlLabel value={0} label='Потеряшки' control={<Radio/>}/>
                    <FormControlLabel value={1} label='Найденыши' control={<Radio/>}/>
                    <FormControlLabel value={2} label='Ищут новый дом' control={<Radio/>}/>
          </RadioGroup> 
            {/* })}   */}

        
        
    </FormControl>
  )
}
export default MyRadio;