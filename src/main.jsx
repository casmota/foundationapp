/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Page404 from './pages/Page404.jsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client.js';

const Nonprofit = React.lazy(() => import('./pages/Nonprofit/Nonprofit.jsx'));
const Sendemail = React.lazy(() => import('./pages/Sendemail/Sendemail.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "nonprofit",
        element: <Nonprofit />
      },
      {
        path: "sendemail",
        element: <Sendemail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
