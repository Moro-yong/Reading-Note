import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthContextPorvider } from './context/authContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './router/ProtectedRoute';
import MainPage from './pages/Main';
import App from './App';
import PostsPage from './pages/Posts';
import AdminPage from './pages/Admin';

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
        element: (
          <ProtectedRoute>
            <PostsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin',
        element: (
          <ProtectedRoute admin>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
