import { createContext, useContext, useState, useEffect } from 'react';
import { onUserStateChange, login, logout } from '../api/firebase';
import { User } from 'firebase/auth';

export interface UserType extends User {
  isAdmin?: boolean;
}

export interface AuthContext extends user {
  login: typeof login;
  logout: typeof logout;
  isLoading: boolean;
}

export type user = {
  user: UserType | null;
};

const AuthContext = createContext<AuthContext | null>(null);

export function AuthContextPorvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onUserStateChange((user) => {
      setIsLoading(false);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext) as AuthContext;
}
