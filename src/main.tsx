import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthContextPorvider } from './context/authContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/Main';
import App from './App';
import PostsPage from './pages/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: null,
    children: [
      {
        index: true,
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/posts',
        element: <PostsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextPorvider>
      <RouterProvider router={router} />
    </AuthContextPorvider>
  </React.StrictMode>,
);
