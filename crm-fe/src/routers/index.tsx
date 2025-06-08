import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
import Tasks from "../pages/Tasks";
import Leads from "../pages/Leads";
import Teams from "../pages/Teams";
import Departments from "../pages/Departments";
import Employees from "../pages/Employees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "leads",
        element: <Leads />,
      },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "departments",
        element: <Departments />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
    ],
  },
]);
