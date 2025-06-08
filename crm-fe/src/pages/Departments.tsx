import React from "react";
import { useGetDepartmentsQuery } from "../redux/services/employeeApi";
import type { Department } from "../types";

const Departments: React.FC = () => {
  const { data: departments, error, isLoading } = useGetDepartmentsQuery();

  if (isLoading) {
    return <div className="p-4">Loading Departments...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading departments.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Departments</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Department List</h2>
        {departments && departments.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                {/* Add more table headers for other department fields */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {departments.map((department: Department) => (
                <tr key={department.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {department.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {department.name}
                  </td>
                  {/* Add more table data cells for other department fields */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No departments found.</p>
        )}
      </div>
    </div>
  );
};

export default Departments;
