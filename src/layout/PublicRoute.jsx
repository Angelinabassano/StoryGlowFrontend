import LogoCompleto from '@/components/logo/Logo';
import NavbarPublic from '@/components/navbar/NavbarPublic';
import { Outlet } from 'react-router-dom';

const PublicRoute = () => {
  return (
    <>
      <NavbarPublic/>
      <Outlet />
      <LogoCompleto></LogoCompleto>
    </>
  );
};

export default PublicRoute;