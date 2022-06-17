import React, { Children, cloneElement, useEffect, useState } from 'react';
import cl from './myCorusel.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';

const Corusel = ({children, visible, setVisible, post}) => {
const [page, setPage] = useState([]);
const [offSet, setOffSet] = useState(0);
const [pageWidth, setPageWidth] = useState(950);


const rootClasses = [cl.screen];
if (visible) {
  rootClasses.push(cl.active)
}

const rightArrowClick = () => {
  setOffSet((curretnPage => {
    const newOffset = curretnPage - pageWidth;
    const maxOffset = -(pageWidth * (page.length-1));
    console.log(maxOffset);
    return Math.max(newOffset, maxOffset)
  }))
}
const leftArrowClick = () => {
  setOffSet((curretnPage => {
    const newOffset = curretnPage + pageWidth;
    return Math.min(0, newOffset)
  }))
}
const chengState = () => {
  setPage(
    Children.map(children, child => {
      return cloneElement(child, {
        style: {
          height:'100%',
          maxWidth: `${pageWidth}px`,
          minWidth: `${pageWidth}px`,
        },
      })
    })
  )
}
useEffect(() =>{
   chengState()
   if (window.screen.width < 480) {
    setPageWidth(295)
  } else if (window.screen.width < 930){
    setPageWidth(600)
  } else {
    setPageWidth(950)
  }
}, [visible])

  return(
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.main_container} onClick={e => e.stopPropagation()}>
          <IconButton sx={{}} onClick={leftArrowClick}>
            <ChevronLeftIcon fontSize='inherit'/>
          </IconButton>
            <div className={cl.window}>
              <div className={cl.all_pages} 
                style={{transform: `translateX(${offSet}px)`}}>
                  {page}
              </div>
            </div>
           <IconButton sx={{}} onClick={rightArrowClick}>
            <ChevronRightIcon fontSize='inherit'/>
          </IconButton> 
        </div>
    </div>
  )
}
export default Corusel;