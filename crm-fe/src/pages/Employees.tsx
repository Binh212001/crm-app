import {
  useGetEmployeesQuery,
  useDeleteEmployeeMutation,
} from "@/redux/services/employee/employeeApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import type { Employee } from "@/redux/services/employee/dto/employee.interface";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Employees: React.FC = () => {
  const { data, error, isLoading } = useGetEmployeesQuery({
    page: 0,
    limit: 1000,
  });
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  console.log("🚀 ~ selectedEmployees:", selectedEmployees);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const handleSelectAll = () => {
    if (selectedEmployees.length === data?.data.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(data?.data.map((employee) => employee.id) || []);
    }
  };

  const handleSelectEmployee = (id: string, checked: boolean) => {
    setSelectedEmployees((prev) =>
      checked ? [...prev, id] : prev.filter((empId) => empId !== id)
    );
  };

  const columns: ColumnDef<Employee>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];

  const table = useReactTable({
    data: data?.data || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleDeleteSelected = async () => {
    try {
      await Promise.all(selectedEmployees.map((id) => deleteEmployee(id)));
    } catch (error) {
      console.error("Error deleting employees:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading employees</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end mb-4">
        <Button
          variant="destructive"
          onClick={handleDeleteSelected}
          disabled={selectedEmployees.length === 0}
        >
          Delete Selected ({selectedEmployees.length})
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedEmployees.length === data?.data.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedEmployees.includes(employee.id)}
                    onCheckedChange={(checked) =>
                      handleSelectEmployee(employee.id, checked as boolean)
                    }
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <Avatar>
                      <AvatarImage
                        src={
                          employee.avatar || "https://github.com/evilrabbit.png"
                        }
                        className="rounded-full size-7"
                      />
                    </Avatar>
                    <span>{`${employee.firstName} ${employee.lastName}`}</span>
                  </div>
                </TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.position || "-"}</TableCell>
                <TableCell>{employee.phone || "-"}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      employee.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {employee.isActive ? "Active" : "Inactive"}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Employees;
