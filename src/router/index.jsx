import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import React from 'react';
import HomePublic from "@/components/home/HomePublic";


const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: '/',
        element: <Navigate to='/homepublic' />
      },
      {
        path: "/homepublic",
        element: <HomePublic />,
      },
      {
        path: "/register",
        element: {/* <Register /> */}
      },
      {
        path: "/login",
        element: {/* <Login /> */}
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/homeprotected',
        element:  <ssd/>
      },
      {
        path: '/settings',
        element: {/* <Settings /> */}
      },
    ],
  }
]);

export default router