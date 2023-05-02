import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

type props = {
  children: React.ReactNode;
  admin: boolean;
};

export default function ProtectedRoute({ children, admin }: props) {
  const { user } = useAuthContext();
  if (!user || (admin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
