import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";


const router = createBrowserRouter([
  {

    element: <PublicRoute />,
    children: [
       {
        path: '/',
        element: <Navigate to='/homePublic' />
      },  
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/register",
        element: <SignUp />
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/home",
        element:  {/* <HomePrivate /> */}
      },
      {
        path: "/settings",
        element: {/* <Settings /> */}
      },
      
      
    ],
  }


]);

export default router