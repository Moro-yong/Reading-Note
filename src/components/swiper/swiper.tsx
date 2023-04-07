import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperComponent() {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-96">
        {swiperImage.map((swiper, index) => (
          <SwiperSlide key={index}>
            <img src={swiper} alt="img" className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const swiperImage = [
  'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11289000&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wNDg2X251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006',
  'http://3.bp.blogspot.com/-eIMnfR6ooVE/VPlqlyiX6wI/AAAAAAAABEw/e8KjQ0yztRQ/s1600/16419550212_898118980d_o.jpg',
  'https://mblogthumb-phinf.pstatic.net/20151101_265/kk4655_1446336707681mA2XX_JPEG/Winter-trees-river-ice-snow-sunset_1920x1080.jpg?type=w420',
  'https://media.istockphoto.com/id/1438178298/ko/%EC%82%AC%EC%A7%84/%EC%8B%9C%EA%B3%A8-%EB%88%88-%EB%8D%AE%EC%9D%B8-%EA%B8%B8%EC%97%90%EC%84%9C-%EC%95%84%EC%B9%A8%EC%97%90-%EC%9D%BC%EC%B6%9C%EC%9D%98-%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EC%A0%84%EB%A7%9D.jpg?b=1&s=170667a&w=0&k=20&c=tgnCosEjK1tTzVxgW85vdgptJ3AgUhBswbZYiCezrI4=',
];
