import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ServicesPage from './pages/ServicesPage';

const router = createBrowserRouter([
  {
    path: '/dental-clinic',
    element: <App />
  },
  {
    path: '/dental-clinic/services',
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
