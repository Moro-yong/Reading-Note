import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function RecommendedBook() {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <div className="w-full">
      <div>
        {title.map((title, index) => (
          <p key={`title_${index}`} className="text-3xl font-bold">
            {title}
          </p>
        ))}

        <p className="my-10">{subTitle}</p>
      </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[30rem]">
        {swiperImage.map((swiper, index) => (
          <SwiperSlide key={index}>
            <img src={swiper} alt="img" className="h-4/6" />
            <div className="flex mt-3">
              <p className="mr-4 text-sm">작가</p>
              <p className="text-sm">장르</p>
            </div>
            <p className="font-medium my-2">여기는 책 타이틀이 들어갑니다.</p>
            <p className="text-sm">여기는 책 설명이 들어갑니다.</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const swiperImage = [
  'data:image/jpeg;base64,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',
  'https://www.moducopy.co.kr/data/item/1526369419/thumb-KD026f_600x852.jpg',
  'https://img.seoul.co.kr/img/upload/2022/06/19/SSI_20220619220830.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/27/%EC%82%AC%EB%9E%8C%EC%9D%84_%EC%A2%8B%EC%95%84%ED%95%98%EB%8A%94_%ED%97%A4%EB%93%9C%ED%97%8C%ED%84%B0_%EC%B1%85_%ED%91%9C%EC%A7%80.jpg',
  'https://i.pinimg.com/564x/bf/69/78/bf6978d06ec0087b3f9d2502b25b3cbe.jpg',
];

const title = ['다체로운 즐거움', '여름에도 즐기는 베스트 컬렉션'];
const subTitle = '가장 많이 읽은 책은 무엇일까요? 사람들이 가장 좋아하는 책을 모았습니다.';
