import user from '../../asset/image/user.png';
import sprout from '../../asset/image/sprout.png';

export default function User() {
  return (
    <section className="max-w-5xl w-full flex border-b mb-4 pb-4">
      <div className="flex flex-1 items-center justify-center">
        <div className="relative w-24 h-24">
          <img src={user} alt="profile" />
          <img
            src={sprout}
            alt={`rank sprout`}
            className="w-8 bg-white rounded-full p-[0.1rem] absolute transform -translate-x-full -translate-y-full top-full -right-1/3 drop-shadow-md"
          />
        </div>
        <div className="flex-1 mx-8">
          <p className="font-bold text-2xl">Andika Joho G</p>
          <p className="text-zinc-600">Photographer</p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        {metaData.map((item) => (
          <div className="mx-4 flex-1">
            <p className="font-bold text-xl text-center">62</p>
            <p className="text-center">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const metaData = ['Posts', 'Followers', 'Following'];
