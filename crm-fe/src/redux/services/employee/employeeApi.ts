import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreateEmployee } from "./dto/create-employee-req";
import type { Employee } from "./dto/employee.interface";
import type { PaginationMeta } from "@/interface/pagination.interface";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  tagTypes: ["Employee"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query<
      {
        data: Employee[];
        pagination: PaginationMeta;
      },
      { page?: number; limit?: number; q?: string }
    >({
      query: (params) => ({
        url: "employees",
        method: "GET",
        params: {
          page: params.page || 1,
          limit: params.limit || 10,
          q: params.q || "",
        },
      }),
      providesTags: ["Employee"],
    }),

    createEmployee: builder.mutation({
      query: (dto: CreateEmployee) => {
        const formData = new FormData();
        formData.append("firstName", dto.firstName);
        formData.append("lastName", dto.lastName);
        formData.append("email", dto.email);
        formData.append("hireDate", dto.hireDate);
        formData.append("dateOfBirth", dto.dateOfBirth);

        if (dto.files) {
          formData.append("files", dto.files);
        }

        return {
          url: "employees",
          method: "POST",
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: ["Employee"],
    }),

    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employee"],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useCreateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;
