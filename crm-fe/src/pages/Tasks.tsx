import React from "react";
import { useGetTasksQuery } from "../redux/services/employeeApi";
import type { Task } from "../types";

const Tasks: React.FC = () => {
  const { data: tasks, error, isLoading } = useGetTasksQuery();

  if (isLoading) {
    return <div className="p-4">Loading Tasks...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading tasks.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Task List</h2>
        {tasks && tasks.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                {/* Add more table headers for other task fields */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task: Task) => (
                <tr key={task.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.title}
                  </td>
                  {/* Add more table data cells for other task fields */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default Tasks;
