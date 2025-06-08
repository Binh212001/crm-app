export interface Product {
  id: string | number;
  // Add other product fields here, e.g.,
  name: string;
  price: number;
}

export interface Customer {
  id: string | number;
  // Add other customer fields here, e.g.,
  name: string;
  email: string;
}

export interface Task {
  id: string | number;
  // Add other task fields here, e.g.,
  title: string;
  status: string;
}

export interface Lead {
  id: string | number;
  // Add other lead fields here, e.g.,
  name: string;
  source: string;
}

export interface Team {
  name: string;
  description: string;
  department: Department;
  createdAt: string;
  createdBy: string | null;
  updatedAt: string;
  updatedBy: string | null;
  id: string;
}

export interface Department {
  name: string;
  description: string;
  createdAt: string;
  createdBy: string | null;
  updatedAt: string;
  updatedBy: string | null;
  id: string;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  address: string;
  dateOfBirth: string;
  hireDate: string;
  isActive: boolean;
  team: Team;
  createdAt: string;
  createdBy: string | null;
  updatedAt: string;
  updatedBy: string | null;
}

export interface PaginationInfo {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalRecords: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}
