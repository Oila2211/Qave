import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../assets/styles/HeroSection.css';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const images = [
    '/images/restaurant.interior-1.jpg',
    '/images/restaurant.interior-2.jpg',
    '/images/restaurant.interior-3.jpg',
    '/images/restaurant.interior-4.jpg',
    '/images/restaurant.interior-5.jpg',
  ];

  return (
    <section style={{ height: '80vh', position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        speed={1500} // Smooth swiping transition speed
        slidesPerView={1}
        spaceBetween={30}
        allowTouchMove={true} // Disables manual swiping
        className="hero-swiper"
        style={{ height: '100%', borderRadius: '20px' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                width: '100%',
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Overlay */}
      <div
        className='hero-text-overlay'
      >
        <h1 className="hero-title">
          <span className="hero-the">The</span> 
          <span className="hero-qave">Qave</span> 
          <span className="hero-by">by</span> 
          <span className="hero-afriqana">Afriqana</span>
        </h1>
        <p className="hero-subtitle">Savor authentic West African cuisine in Stockholm. Order online or enjoy the unique African-inspired dine-in experience.</p>
      </div>
    </section>
  );
};

export default HeroSection;
