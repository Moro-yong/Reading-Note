import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { subTitle, title, swiperImage } from '../../constants';

import 'swiper/css';
import 'swiper/css/pagination';

export default function RecommendedWriter() {
  return (
    <div className="max-w-5xl w-full flex">
      <div className="flex-1 mr-8">
        {title.map((title, index) => (
          <p key={`title_${index}`} className="text-3xl font-bold">
            {title}
          </p>
        ))}
        <p className="my-4">{subTitle}</p>
        <button className="bg-white rounded-md border border-black p-2">더보기</button>
      </div>
      <Swiper spaceBetween={20} slidesPerView={3} className="h-80 flex-[3]">
        {swiperImage.map((swiper, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img src={swiper} alt="img" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 p-4 bg-[#00000057]">
                <p className="text-xl font-semibold">타이틀입니다.</p>
                <p className="text-xs">서브 타이틀 또는 간단한 설명입니다.</p>
                <div className="flex items-center mt-4 ">
                  <img
                    src={swiperImage[0]}
                    alt="img"
                    className="rounded-full mr-3 max-w-[2.5rem] max-h-[2.5rem] w-10 h-10"
                  />
                  <p>작가 이름</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
