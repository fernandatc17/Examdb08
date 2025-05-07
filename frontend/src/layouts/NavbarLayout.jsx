import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default NavbarLayout;
