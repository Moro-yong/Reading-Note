import { Outlet } from 'react-router-dom';
import { AuthContextPorvider } from './context/authContext';

function App() {
  return (
    <AuthContextPorvider>
      <Outlet />
    </AuthContextPorvider>
  );
}

export default App;
