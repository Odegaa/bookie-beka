import React from 'react';
import VecStar1 from 'src/assets/images/VecStar1.svg';
import VecStar2 from 'src/assets/images/VecStar2.png';
import VecStar3 from 'src/assets/images/VecStar3.svg';
import VecSave from 'src/assets/images/VecSave.svg';
import FrameBorder from 'src/assets/images/frameborder.png';
import styles from './HomeFrame.module.scss';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from 'src/assets/images/1.jpg';
import img2 from 'src/assets/images/2.jpg';
import img3 from 'src/assets/images/3.jpg';
import img4 from 'src/assets/images/4.jpg';
import img5 from 'src/assets/images/5.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const HomeFrame: React.FC = () => {
  const sliders = [
    {
      img: img1,
      url: 'https://play.google.com/store/apps/details?id=com.karsoft.tusindirmesozlik',
    },
    {
      img: img2,
      url: 'https://kknews.uz/kk/',
    },
    {
      img: img3,
      url: 'https://www.youtube.com/@bookiemusickr',
    },
    {
      img: img4,
      url: '/https://www.instagram.com/karsoftuz?igsh=MXZtZ3I0eHBzcHVxaw==',
    },
    {
      img: img5,
      url: '/https://t.me/karsoft_school',
    },
  ];

  return (
    <div id="frame" className={styles.frame}>
      <img className={styles.image1} src={VecSave} alt={`save`} />
      <img className={styles.image2} src={VecStar1} alt="star1" />
      <div className={styles.border}>
        <img src={FrameBorder} alt="border" />
      </div>
      <Swiper
        centeredSlides
        loop
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          disableOnInteraction: false,
          delay: 3000,
        }}
        slidesPerView={1}
        spaceBetween={100}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className={styles.swiperSlider}>
          <iframe src="https://www.youtube.com/embed/UT9ndxZPXxY" className={styles.iframe} />
        </SwiperSlide>
        {sliders.map((slider, index) => (
          <SwiperSlide className={styles.swiperSlider}>
            <img src={slider?.img} alt={index.toString()} className={styles.iframe} />
            <a href={slider.url} className={styles.sliderLink} />
          </SwiperSlide>
        ))}
      </Swiper>
      <img className={styles.image3} src={VecStar2} alt="star2" />
      <img className={styles.image4} src={VecStar3} alt="star3" />
    </div>
  );
};

export { HomeFrame };
