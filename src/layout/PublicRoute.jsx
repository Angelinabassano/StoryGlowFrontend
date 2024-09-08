import NavbarPublic from '@/components/navbar/NavbarPublic';
import { Outlet } from 'react-router-dom';

const PublicRoute = () => {
  return (
    <>
      <NavbarPublic/>
      <Outlet />
      {/*footer*/}
    </>
  );
};

export default PublicRoute;