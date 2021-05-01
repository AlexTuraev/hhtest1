import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';

import './app.scss';
import LeftPanel from '../left-panel';
import RightPanel from '../right-panel';

function App() {
  
  return (
    <div className='app'>
      <Swiper id='main' tag='section' wrapperTag='ul'>
        <SwiperSlide key={`slide-0}`} tag='li'> 
          <LeftPanel />
        </SwiperSlide>
      
        <SwiperSlide key={`slide-1}`} tag='li'> 
          <RightPanel />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
