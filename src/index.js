import React from 'react';
import ReactDOM from 'react-dom/client';
// import Countdown from 'react-countdown';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from 'react-router-dom';
import PanicDashboard from './PanicDashboard';
import Header from './Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/panic/',
    element: <PanicDashboard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
