import NavbarProtected from '@/components/navbar/NavbarProtected';
import Footer from '@/components/footer/Footer';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarProtected />
      <main className="flex-grow flex items-center justify-center px-4 pb-20">
        <Outlet />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default ProtectedRoute;
