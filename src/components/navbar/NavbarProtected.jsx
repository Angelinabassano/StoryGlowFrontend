import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import LogoLargo from '@/assets/logo/LogoLargo.svg'; 

const NavbarProtected = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="bg-secondary border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 shadow w-full">
        <div className="container flex flex-wrap justify-between items-center mx-auto w-full">
          
          <Link to="/homepublic" className="flex items-center">
            <img 
              src={LogoLargo} 
              alt="Logo" 
              className="w-32 h-auto"   
            />
          </Link>

          <div className="flex items-center md:hidden">
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex items-center p-2 w-full text-sm text-primary rounded-lg  focus:outline-none focus:ring-0 dark:text-white dark:bg-primary-dark"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`w-full md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium justify-center items-center">
              <li className="w-full">
                <Link
                  to="/homepublic"
                  className="block py-2 px-4 w-full text-center text-primary hover:bg-[#BDD3CE] rounded focus:outline-none dark:text-primary dark:hover:bg-primary-dark"
                >
                  Log out
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/settings"
                  className="block py-2 px-4 w-full text-center text-primary hover:bg-[#BDD3CE] rounded focus:outline-none dark:text-primary dark:hover:bg-primary-dark"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default NavbarProtected;