import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createHashRouter, RouterProvider } from "react-router-dom";

import ServicesPage from './pages/ServicesPage';

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/services',
    element: <ServicesPage />
  },
  {
    path: '*',
    element: <h1 style={{ color: "white", padding: "40px" }}>404 - Page Not Found</h1>
  }
]);







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
