import React from "react";
import { useGetTeamsQuery } from "../redux/services/employeeApi";
import type { Team } from "../types";

const Teams: React.FC = () => {
  const { data: teams, error, isLoading } = useGetTeamsQuery();

  if (isLoading) {
    return <div className="p-4">Loading Teams...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading teams.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teams</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Team List</h2>
        {teams && teams.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                {/* Add more table headers for other team fields */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teams.map((team: Team) => (
                <tr key={team.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {team.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {team.name}
                  </td>
                  {/* Add more table data cells for other team fields */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No teams found.</p>
        )}
      </div>
    </div>
  );
};

export default Teams;
