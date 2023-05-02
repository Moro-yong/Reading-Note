import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onUserStateChange, login, logout } from '../api/firebase';
import { User } from 'firebase/auth';

export interface UserType extends User {
  isAdmin?: boolean;
}

export interface AuthContext extends user {
  login: typeof login;
  logout: typeof logout;
}

export type user = {
  user: UserType | null;
};

const AuthContext = createContext<AuthContext | null>(null);
export function AuthContextPorvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext) as AuthContext;
}
