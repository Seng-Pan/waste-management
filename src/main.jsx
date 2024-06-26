import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import Company from './components/Company';
import Apple from './components/Apple'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },

  {
    path: "/Company",
    element: <Company />
  },

  {
    path: "/Company/Apple",
    element: <Apple />
  }


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
