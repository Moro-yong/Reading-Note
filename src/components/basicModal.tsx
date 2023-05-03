import { useState } from 'react';
import { useAuthContext, AuthContext } from '../context/authContext';

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const { user, login, logout } = useAuthContext();

  const handleOpen = () => {
    setOpen((pre) => !pre);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <div className="relative">
      {!user && (
        <button onClick={login} className="font-bold">
          Login
        </button>
      )}
      {user && (
        <button onClick={handleOpen} className="font-bold text-blue-400">
          {user.displayName}
        </button>
      )}

      {open && (
        <section>
          <div onClick={handleClose} className="fixed top-0 left-0 w-screen h-screen" />
          <div className="flex flex-col w-28 absolute -bottom-2 right-0 translate-x-0 translate-y-full drop-shadow-xl bg-white">
            <div className="border-b py-4 px-2 text-xs bg-blue-200">Profile</div>
            <button className="text-left border-b border-gray-200 mx-2 py-4">My page</button>
            <button className="text-left border-b border-gray-200 mx-2 py-4">Setting</button>
            <button onClick={handleLogout} className="text-left mx-2 py-4">
              Logout
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
