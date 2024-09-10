import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import React from 'react';
import HomePublic from "@/pages/home/HomePublic";
import HomeProtected from "@/pages/home/HomeProtected";
import ViewBook from "@/pages/home/viewBook/ViewBook";

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
        element:  <HomeProtected/>
      },
      {
        path: '/viewbook/:id', 
        element: <ViewBook/>
      },
    ],
  }
]);

export default router;
