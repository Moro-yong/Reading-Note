import Layout from '../components/layout';
import Navigation from '../components/nav/nav';
import Profile from '../components/profile/profile';
import BookList from '../components/recommendedBook/recomBook';
import RecentlyPosts from '../components/recentlyPosts/recentlyPosts';
import Swiper from '../components/swiper/swiper';
import UserMata from '../components/userMeta/userMeta';
import LatestPosts from '../components/latestPosts/latestPosts';
import WriterList from '../components/recommendedWriter/recomWriter';

export default function MainPage() {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <Layout>
        <Profile />
        <BookList />
        <RecentlyPosts />
      </Layout>
    </div>
  );
}
