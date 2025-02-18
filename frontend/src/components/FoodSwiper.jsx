// FoodSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const FoodSwiper = () => {
  return (
    <div style={{ width: '800px', margin: '0 auto' }}>
      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        navigation={{ clickable: true }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        }}
        style={{ padding: '2rem 0' }}
      >
        <SwiperSlide>
          <img src="/images/jollof-rice-1.jpg" alt="Jollof Rice" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/okro-soup-1.jpg" alt="Okro Soup" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/plaintain1.jpg" alt="Plantain" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/rice&beans.jpg" alt="White Rice & Beans" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/puff-puff01.jpg" alt="Puff Puff" style={{ width: '100%' }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodSwiper;
