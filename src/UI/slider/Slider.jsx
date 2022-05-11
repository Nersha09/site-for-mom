import React from 'react';
import cl from './/Slider.module.css'

const Slider = () => {
    document.addEventListener('DOMContentLoaded', function () {
        // инициализация слайдера
        const slider = new SimpleAdaptiveSlider('.slider', {
          loop: false,
          autoplay: false,
          interval: 5000,
          swipe: true,
        });
    });
  return(
    <div className={cl.slider}>
          <div className={cl.slider__wrapper}>
              <div className={cl.slider__items}>
                  <div className={cl.slider__item}>
                    <div style={{height: '250px', background: '#3f51b5'}}></div>
                  </div>
              </div>
            </div>
          <a class="slider__control slider__control_prev" href="#" role="button" data-slide="prev"></a>
          <a class="slider__control slider__control_next" href="#" role="button" data-slide="next"></a>
  </div>
  )
}
export default Slider;