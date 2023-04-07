import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import user from '../../asset/image/user.png';

import 'swiper/css';
import 'swiper/css/navigation';

export default function newPostSwiper() {
  SwiperCore.use([Navigation]);

  return (
    <div className="max-w-5xl w-full h-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={6}
        navigation
        className="h-full px-16">
        {swiperImage.map((swiper, index) => (
          <SwiperSlide key={index}>
            <div className="w-20 h-20 rounded-full m-2 p-[2px] border border-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <div className="p-[2px] bg-white rounded-full">
                <img src={user} alt="user" className="rounded-full" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const swiperImage = ['', '', '', '', '', '', '', ''];
