import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import Company from './components/Company';
import Apple from './components/Apple'
import CpAll from './components/CpAll';
import Minion from './components/Minion'
import Resident from './components/Resident';
import Result from './pages/Result';

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
  },

  {
    path: "/Company/CpAll",
    element: <CpAll />
  },

  {
    path: "/Company/Minion",
    element: <Minion />
  },

  {
    path: "/Company/Apple/Resident",
    element: <Resident />
  },

  {
    path: "/Company/CpAll/Resident",
    element: <Resident />
  },

  {
    path: "/Company/Minion/Resident",
    element: <Resident />
  },

  {
    path: "/Company/Apple/Resident/Result",
    element: <Result />
  },

  {
    path: "/Company/CpAll/Resident/Result",
    element: <Result />
  },

  {
    path: "/Company/Minion/Resident/Result",
    element: <Result />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
