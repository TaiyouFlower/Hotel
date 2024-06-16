import { Link, useNavigate, useLocation } from 'react-router-dom';
import DropdownButton from 'components/ux/dropdown-button/DropdownButton';
import { networkAdapter } from 'services/NetworkAdapter';
import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';
import React, { useState } from 'react';
/**
 * A component that renders the navigation items for the navbar for both mobile/desktop view.
 *
 * @param {Object} props - The component's props.
 * @param {boolean} props.isAuthenticated - A flag indicating whether the user is authenticated.
 * @param {Function} props.onHamburgerMenuToggle
 */
const NavbarItems = ({ isAuthenticated, onHamburgerMenuToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(AuthContext);
  const [activeLang, setActiveLang] = useState(`English`);

  /**
   * Handles the logout action by calling the logout API and updating the authentication state.
   */
  const handleLogout = async () => {
    await networkAdapter.post('api/users/logout');
    context.triggerAuthCheck();
    navigate('/login');
  };
  const handleLangSwitch = (lang) => {
    setActiveLang(lang);
    alert(`Language switched to ${lang}`);
  };
  const dropdownOptions = [
    { name: 'Profile', onClick: () => navigate('/user-profile') },
    { name: 'Logout', onClick: handleLogout },
  ];

  /**
   * Determines if a given path is the current active path.
   *
   * @param {string} path - The path to check.
   * @returns {boolean} - True if the path is active, false otherwise.
   */
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex align-center justify-between">
      <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
        <Link
          to="/"
          className={`uppercase font-medium text-slate-100 hover-underline-animation ${
            isActive('/') && 'active-link'
          }`}
          onClick={onHamburgerMenuToggle}
        >
          Home
        </Link>
      </li>
      <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
        <Link
          to="/hotels"
          className={`uppercase font-medium text-slate-100 hover-underline-animation ${
            isActive('/hotels') && 'active-link'
          }`}
          onClick={onHamburgerMenuToggle}
        >
          Hotels
        </Link>
      </li>
      <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
        <Link
          to="/about-us"
          className={`uppercase font-medium text-slate-100 hover-underline-animation ${
            isActive('/about-us') && 'active-link'
          }`}
          onClick={onHamburgerMenuToggle}
        >
          About us
        </Link>
      </li>
      <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
        <Link
          to="/contact-us"
          className={`uppercase font-medium text-slate-100 hover-underline-animation ${
            isActive('/contact-us') && 'active-link'
          }`}
          onClick={onHamburgerMenuToggle}
        >
          Contact us
        </Link>
      </li>
      <li
        className={`${!isAuthenticated && 'p-4 hover:bg-blue-900 md:hover:bg-brand'}`}
      >
        {isAuthenticated ? (
          <DropdownButton triggerType="click" options={dropdownOptions} />
        ) : (
          <Link
            to="/login"
            className={`uppercase font-medium text-slate-100 hover-underline-animation ${
              isActive('/login') && 'active-link'
            }`}
            onClick={onHamburgerMenuToggle}
          >
            Login/Register
          </Link>
        )}
      </li>
      <li className="flex text-maintext items-center gap-1 font-medium">
        <div
          onClick={() => handleLangSwitch('English')}
          className={` ${activeLang === 'English' ? 'text-brand-secondary' : ''} cursor-pointer text-large`}
        >
          English
        </div>
        /
        <div
          onClick={() => handleLangSwitch('Georgian')}
          className={` ${activeLang === 'Georgian' ? 'text-brand-secondary' : ''} cursor-pointer text-large`}
        >
          Georgian
        </div>
      </li>
    </div>
  );
};

export default NavbarItems;
