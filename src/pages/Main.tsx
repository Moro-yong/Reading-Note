import Navigation from '../components/gnb/gnb';
import Swiper from '../components/swiper/swiper';
import UserMata from '../components/userMeta/userMeta';
import LatestPosts from '../components/latestPosts/latestPosts';

export default function MainPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Navigation />
      <Swiper />
      <div className="max-w-5xl w-full flex flex-col items-center">
        <UserMata />
        <LatestPosts />
      </div>
    </div>
  );
}
