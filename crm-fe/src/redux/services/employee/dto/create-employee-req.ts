export interface CreateEmployee {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  position?: string;
  address?: string;
  dateOfBirth: string;
  hireDate: string;
  isActive?: boolean;
  teamId?: string;
  files?: File;
}
