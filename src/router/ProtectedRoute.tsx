import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import Loding from '../components/Loding';

type props = {
  children: JSX.Element;
  admin?: boolean;
};

export default function ProtectedRoute({ children, admin }: props) {
  const { user, isLoading } = useAuthContext();

  if (isLoading) return <Loding />;

  if (!user || (admin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
