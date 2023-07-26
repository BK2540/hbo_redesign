import { ArrowLeftRounded, ArrowRightRounded } from '@mui/icons-material';
import './trending.scss';
import { useRef, useState } from 'react';
import { trendingData } from '../../data/trendingData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Trending = () => {

  const mobile = window.innerWidth<=768 ? true : false;

return (
    <div className='trending'>
      <div className="header">
        <span>Trending Now</span>
      </div>
      <Swiper
        slidesPerView={mobile? 2 : 3}
        spaceBetween={mobile? 6 : 32}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='item'>
          <span className='number'>1.</span>
          <div className="cover">
            <img src={trendingData[0].img} alt="img" className='item_img' />
            <div className="cover_title">
              <span>{trendingData[0].name}</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <span className='number'>2.</span>
          <div className="cover">
            <img src={trendingData[1].img} alt="img" className='item_img' />
            <div className="cover_title">
              <span>{trendingData[1].name}</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <span className='number'>3.</span>
          <div className="cover">
            <img src={trendingData[2].img} alt="img" className='item_img' />
            <div className="cover_title">
              <span>{trendingData[2].name}</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <span className='number'>4.</span>
          <div className="cover">
            <img src={trendingData[3].img} alt="img" className='item_img' />
            <div className="cover_title">
              <span>{trendingData[3].name}</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <span className='number'>5.</span>
          <div className="cover">
            <img src={trendingData[4].img} alt="img" className='item_img' />
            <div className="cover_title">
              <span>{trendingData[4].name}</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Trending