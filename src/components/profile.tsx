import { TiTags, TiVideoOutline, TiUserAdd, TiTicket } from 'react-icons/ti';
import { useAuthContext } from '../context/authContext';

export default function ProfileComponent() {
  const { user } = useAuthContext();
  return (
    <>
      {user && (
        <section className="w-full my-20">
          <div className="flex">
            <img
              src={user.photoURL as string}
              alt="user profile image"
              width={128}
              height={128}
              className="bg-slate-200 rounded-full w-32 h-32 mr-8"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold">{user.displayName}</h2>
              <h3 className="font-semibold ">{user.email}</h3>
              <p className="text-sm">this space is inter</p>
            </div>
          </div>
          <div className="flex gap-6">
            {rank.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8 w-4/6 h-36 bg-slate-200 rounded-2xl mt-10">
                <div className="flex-1">
                  <h2 className="text-start">나의 000은</h2>
                  <div className="flex gap-1 items-end mt-2">
                    <p className="font-bold text-4xl">{'222'}</p>
                    <p>Rank</p>
                  </div>
                </div>
                {/* <div className="flex-1 text-center">Image</div> */}
                <item.icon className="w-20 h-20" />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

const rank = [
  {
    icon: TiTags,
  },
  {
    icon: TiVideoOutline,
  },
  {
    icon: TiUserAdd,
  },
  {
    icon: TiTicket,
  },
];
