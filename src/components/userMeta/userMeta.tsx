import NewPostSwiper from './newPostSwiper';
import User from './user';

export default function UserMata() {
  return (
    <div className="flex flex-col items-center m-20">
      <User />
      <NewPostSwiper />
    </div>
  );
}
