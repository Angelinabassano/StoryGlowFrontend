import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoute = () => {

  return (
    <>
      {/* Navbar 1*/}
      <Outlet />
      {/* Footer 1*/}
    </>
  );
};

export default ProtectedRoute
