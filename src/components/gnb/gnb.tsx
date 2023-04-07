import { useNavigate } from 'react-router-dom';

import logo from '../../asset/image/logo-design.webp';
import search from '../../asset/image/search.png';
import user from '../../asset/image/user.png';

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className="h-16 px-20 flex items-center justify-between">
      <div>ham</div>
      <img src={logo} alt="logo" width={'38rem'} />
      <div className="flex">
        <ul className="flex">
          {gnbList.map((list) => (
            <li key={list.id} className="mx-2" onClick={() => navigate(list.url)}>
              {list.icon ? <img src={list.icon} alt="icon" width={'24rem'} /> : <p>{list.name}</p>}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const gnbList = [
  {
    id: 0,
    name: 'search',
    icon: search,
    url: '',
  },
  {
    id: 1,
    name: 'user',
    icon: user,
    url: '',
  },
];
