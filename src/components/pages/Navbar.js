import React from 'react';
import GLogo from '../../assets/Logo.jpg';

export default function Navbar({ handlePageChange }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="md:sticky top-0 z-10 bg-[#f3f8fe] md:flex p-5 pt-8 md:flex-row items-center justify-around">
      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start md:px-12 md:w-1/2">
        <img
          className="object-cover object-center rounded-lg leading-relaxed text-justify"
          alt="hero"
          src={GLogo}
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto flex flex-wrap p-5 pt-12 m- md:flex-row items-center justify-center md:text-center">
        {/* Menu Icon */}
        <button
          className="md:hidden text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          onClick={toggleMenu}
        >
          Menu
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 right-0 bg-white w-full h-full py-4 px-2">
            <a
              href="#About"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handlePageChange('About')}
            >
              Home
            </a>
            <a
              href="#TreeRemoval"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handlePageChange('TreeRemoval')}
            >
              Tree Removal
            </a>
            <a
              href="#StumpRemoval"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handlePageChange('StumpRemoval')}
            >
              Stump Removal
            </a>
            <a
              href="#TreeTrimming"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handlePageChange('TreeTrimming')}
            >
              Tree Trimming
            </a>
            <a
              href="#TreeCare"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handlePageChange('TreeCare')}
            >
              Tree Care
            </a>
            <a
              href="#EmergencyCare"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handlePageChange('EmergencyCare')}
            >
              Emergency Care
            </a>
            <a
              href="#Contact"
              className="block text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handlePageChange('Contact')}
            >
              Contact
            </a>
          </div>
        )}

        {/* Normal Navigation */}
        <div className="hidden md:flex md:items-center justify-center text-black">
          <a
            href="#About"
            className="hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('About')}
          >
            Home
          </a>
          <a
            href="#TreeRemoval"
            className=" hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('TreeRemoval')}
          >
            Tree Removal
          </a>
          <a
            href="#StumpRemoval"
            className=" hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('StumpRemoval')}
          >
            Stump Removal
          </a>
          <a
            href="#TreeTrimming"
            className=" hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('TreeTrimming')}
          >
            Tree Trimming
          </a>
          <a
            href="#TreeCare"
            className=" hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('TreeCare')}
          >
            Tree Care
          </a>
          <a
            href="#EmergencyCare"
            className=" hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('EmergencyCare')}
          >
            Emergency Care
          </a>
          <a
            href="#Contact"
            className=" hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => handlePageChange('Contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
