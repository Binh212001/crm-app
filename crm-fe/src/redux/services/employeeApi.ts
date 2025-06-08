import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EmployeeReq } from "../app/employee/AddEmployee";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  tagTypes: ["Employee"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: (params) => ({
        url: "employee",
        method: "GET",
        params,
      }),
    }),

    createEmployee: builder.mutation({
      query: (formData: EmployeeReq) => {
        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("address", formData.address);
        data.append("position", formData.position);
        if (formData.files) {
          data.append("files", formData.files);
        }

        return {
          url: "employee",
          method: "POST",
          body: data,
          formData: true,
        };
      },
      invalidatesTags: ["Employee"],
    }),

    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `employee/${id}`,
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
