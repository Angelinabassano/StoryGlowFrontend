import Footer from '@/components/footer/Footer';
import NavbarPublic from '@/components/navbar/NavbarPublic';
import { Outlet } from 'react-router-dom';

const PublicRoute = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarPublic />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicRoute;
