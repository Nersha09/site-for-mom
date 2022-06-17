import React from 'react';
import Slider from 'react-slick'

import slider1 from './../../img/slider1.jpeg'
import slider2 from './../../img/slider2.jpeg'
import slider3 from './../../img/slider3.jpeg'
import slider4 from './../../img/slider4.jpeg'


const SlickCarousel = () => {
    const sliders = [slider1, slider2, slider3, slider4]
    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 300
    }
    return (
        <div 
            className='carousel_wrapper'
            style={{
                height: '625px', 
                overflow: 'hidden'
            }}
        >
           <Slider {...settings}> 
                <div> 
                    <div
                        сlassname='carrousel_image' 
                        style={{
                            background: `url(${slider1})`, 
                            height: '600px',
                            borderRadius: '15px 15px 0 0',
                        }}
                    />

                </div>
                <div>
                    <div 
                        сlassname='carrousel_image' 
                        style={{
                            background: `url(${slider2})`, 
                            height: '600px',
                            borderRadius: '15px 15px 0 0',

                        }}
                    />
                </div>
                <div>
                    <div 
                        сlassname='carrousel_image' 
                        style={{
                            background: `url(${slider3})`, 
                            height: '600px',
                            borderRadius: '15px 15px 0 0'
                        }}
                    />
                </div>
                <div>
                    <div 
                        сlassname='carrousel_image' 
                        style={{
                            background: `url(${slider4})`, 
                            height: '600px',
                            borderRadius: '15px 15px 0 0'
                        }}
                    />
                </div>
            </Slider> 
        </div>
      
        
    );
};

export default SlickCarousel;