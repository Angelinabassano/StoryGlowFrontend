import NavbarProtected from '@/components/navbar/NavbarProtected';
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoute = () => {

  return (
    <>
      <NavbarProtected/>
      <Outlet />
      {/* Footer 1*/}
    </>
  );
};

export default ProtectedRoute
