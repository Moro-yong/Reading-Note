import React from 'react';

type props = {
  children: React.ReactNode;
};

function MainLayout({ children }: props) {
  return <div className="flex flex-col items-center max-w-7xl">{children}</div>;
}

export default MainLayout;
