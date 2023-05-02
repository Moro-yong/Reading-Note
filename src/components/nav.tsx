import BasicModal from './basicModal';
import { DiGithubAlt } from 'react-icons/di';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

export default function NavigationComponent() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  return (
    <header className="justify-center w-full border-b">
      <nav className="flex my-4 mx-auto max-w-7xl">
        <button
          onClick={() => navigate('/')}
          className="flex flex-1 items-center text-3xl font-bold">
          <DiGithubAlt className="w-11 h-11" />
          POETRY
        </button>
        <ul className="flex flex-1 gap-8 items-center">
          <li className="text-xl font-medium">
            <button onClick={() => navigate('/')}>home</button>
          </li>
          <li className="text-xl font-medium">
            <button onClick={() => navigate('/posts')}>posts</button>
          </li>
          {user && (
            <li className="text-xl font-medium">
              <button onClick={() => navigate('/write')}>write</button>
            </li>
          )}
          {user?.isAdmin && (
            <li className="text-xl font-medium">
              <button onClick={() => navigate('/admin')}>admin</button>
            </li>
          )}
        </ul>
        <div className="flex flex-1 gap-3 justify-end items-center">
          <BasicModal />
        </div>
      </nav>
    </header>
  );
}
