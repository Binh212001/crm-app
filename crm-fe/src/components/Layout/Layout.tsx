import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import {
  FaBox,
  FaUsers,
  FaTasks,
  FaUserPlus,
  FaUserFriends,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";

const Layout: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/employees", label: "Employees", icon: <FaUserTie /> },
    { path: "/leads", label: "Leads", icon: <FaUserPlus /> },
    { path: "/tasks", label: "Tasks", icon: <FaTasks /> },
    { path: "/products", label: "Products", icon: <FaBox /> },
    { path: "/customers", label: "Customers", icon: <FaUsers /> },
    { path: "/teams", label: "Teams", icon: <FaUserFriends /> },
    { path: "/departments", label: "Departments", icon: <FaBuilding /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg py-6">
        <div className="px-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">CRM System</h1>
        </div>
        <nav className="space-y-2 pr-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center py-2 pl-6 text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                location.pathname.startsWith(item.path)
                  ? "bg-indigo-500 text-white rounded-r-full shadow-md"
                  : "rounded-r-full"
              }`}
            >
              <span
                className={`mr-3 text-lg ${
                  location.pathname.startsWith(item.path)
                    ? "text-white"
                    : "text-gray-400 group-hover:text-gray-700"
                }`}
              >
                {item.icon}
              </span>
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
