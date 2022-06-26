import React from 'react';
import Slider from 'react-slick'

import Carousel from 'react-material-ui-carousel'

import img1 from './../../img/img1.jpg'
import img2 from './../../img/img2.jpg'
import img3 from './../../img/img3.jpg'
import img4 from './../../img/img4.jpg'
import img5 from './../../img/img5.jpg'
import img6 from './../../img/img6.jpg'

import {Paper} from "@mui/material";


const SlickCarousel = () => {
    const sliders = [img1, img2, img3, img4, img5, img6]
   
    return (
        <Carousel>
            {sliders.map((item, ind)=> (
                <Paper
                    key={ind}
                    elevation={4} >
                    <img style={{}} src={item}/>
                </Paper>
            ))}
        </Carousel>
    );
};

export default SlickCarousel;