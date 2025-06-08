import React from "react";
import { FaSearch, FaBell } from "react-icons/fa"; // Assuming you have react-icons installed

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Placeholder for Logo/Title - In the image, this is part of the sidebar */}
      {/* We will keep the title in the sidebar and focus on the header content */}

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <FaSearch className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* User Profile and Icons */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Icons (assuming you want something similar to the image) */}
        {/* Example: sun/moon for theme toggle, github star, etc. */}
        <button className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-200">
          {/* Placeholder Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12H5.25m-.386-6.364l1.591 1.591M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
            />
          </svg>
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-200">
          <FaBell className="h-5 w-5" />
        </button>

        {/* User Menu */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="flex flex-col items-end">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">JD</span>
            {/* Replace with user image */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
