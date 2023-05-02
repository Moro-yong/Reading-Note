import Layout from './Layout';
import Navigation from '../components/nav';
import Profile from '../components/profile';
import BookList from '../components/recomBook';
import RecentlyPosts from '../components/recentlyPosts';

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
