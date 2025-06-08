import React from "react";
import { useGetLeadsQuery } from "../redux/services/employeeApi";
import type { Lead } from "../types";

const Leads: React.FC = () => {
  const { data: leads, error, isLoading } = useGetLeadsQuery();

  if (isLoading) {
    return <div className="p-4">Loading Leads...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading leads.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Lead List</h2>
        {leads && leads.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                {/* Add more table headers for other lead fields */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead: Lead) => (
                <tr key={lead.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {lead.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.name}
                  </td>
                  {/* Add more table data cells for other lead fields */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No leads found.</p>
        )}
      </div>
    </div>
  );
};

export default Leads;
