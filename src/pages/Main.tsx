import Navigation from '../components/gnb/gnb';
import Swiper from '../components/swiper/swiper';
import UserMata from '../components/userMeta/userMeta';
import LatestPosts from '../components/latestPosts/latestPosts';
import BookList from '../components/recommendedBook/recomBook';
import WriterList from '../components/recommendedWriter/recomWriter';

export default function MainPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Navigation />
      <Swiper />
      <div className="max-w-5xl w-full flex flex-col items-center">
        <UserMata />
        <LatestPosts />
        <BookList />
      </div>
      <div className="w-full flex flex-col items-center bg-[#f8f8f8] py-20">
        <WriterList />
      </div>
    </div>
  );
}
