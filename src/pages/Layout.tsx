import React from 'react';

type props = {
  children: React.ReactNode;
};

function MainLayout({ children }: props) {
  return <div className="flex flex-col grow items-center max-w-7xl w-full">{children}</div>;
}

export default MainLayout;
