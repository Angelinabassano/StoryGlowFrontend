import { Outlet } from 'react-router-dom';

const PublicRoute = () => {
  return (
    <>
      {/* navbar1 */}
      <Outlet />
      {/* footer1 */}
    </>
  );
};

export default PublicRoute;