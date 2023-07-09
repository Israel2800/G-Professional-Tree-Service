import React from 'react';
import GLogo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';

export default function Navbar({ handlePageChange }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div expand="md" fixed="top" className="md:sticky top-0 z-10 bg-[#f3f8fe] md:flex md:flex-row items-center justify-around">
      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start md:px-12 md:w-1/2 p-4">
        <img
          className="object-cover object-center rounded-lg leading-relaxed text-justify"
          alt="hero"
          src={GLogo}
          style={{ width: "80px", height: "80px" }}
        />
      </div>

      {/* Navigation Links */}
      <div className="container flex flex-wrap md:p-5 pb-4 md:flex-row items-center justify-center md:text-center">
        {/* Menu Icon */}
        <button
          className="md:hidden bg-green-700 text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          onClick={toggleMenu}
        >
          Menu
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 right-0 bg-white w-full h-full py-4 px-2">
            <Link
              to="/home"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                handlePageChange('Home');
                closeMenu();
              }}
            >
              Home
            </Link>
            <Link
              to="/treeRemoval"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                handlePageChange('TreeRemoval');
                closeMenu();
              }}
            >
              Tree Removal
            </Link>
            <Link
              to="/stumpRemoval"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                handlePageChange('StumpRemoval');
                closeMenu();
              }}
            >
              Stump Removal
            </Link>
            <Link
              to="/treeTrimming"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                handlePageChange('TreeTrimming');
                closeMenu();
              }}
            >
              Tree Trimming
            </Link>
            <Link
              to="/treeCare"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                handlePageChange('TreeCare');
                closeMenu();
              }}
            >
              Tree Care
            </Link>
            <Link
              to="/emergencyCare"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                handlePageChange('EmergencyCare');
                closeMenu();
              }}
            >
              Emergency Care
            </Link>
            <Link
              to="/gallery"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                handlePageChange('Gallery');
                closeMenu();
              }}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                handlePageChange('Contact');
                closeMenu();
              }}
            >
              Contact
            </Link>
          </div>
        )}

        {/* Normal Navigation */}
        <div className="hidden md:flex md:items-center justify-center text-black">
          <Link
            to="/"
            className="hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('Home')}
          >
            Home
          </Link>
          <Link
            to="/treeRemoval"
            className="hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('TreeRemoval')}
          >
            Tree Removal
          </Link>
          <Link
            to="/stumpRemoval"
            className="hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('StumpRemoval')}
          >
            Stump Removal
          </Link>
          <Link
            to="/treeTrimming"
            className="hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('TreeTrimming')}
          >
            Tree Trimming
          </Link>
          <Link
            to="/treeCare"
            className="hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('TreeCare')}
          >
            Tree Care
          </Link>
          <Link
            to="/emergencyCare"
            className="hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('EmergencyCare')}
          >
            Emergency Care
          </Link>
          <Link
            to="/gallery"
            className="hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('Gallery')}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('Contact')}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}