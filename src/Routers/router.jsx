import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from '../features/home/Home';
import NAV_PATH from '../constants/NAV_PATH';

export default createBrowserRouter([
  {
    element: <Home />,
    path: NAV_PATH.HOME,
  },
]);
