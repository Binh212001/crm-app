import { configureStore } from "@reduxjs/toolkit";
import { crmApi } from "./services/employeeApi";

export const store = configureStore({
  reducer: {
    [crmApi.reducerPath]: crmApi.reducer, // Add the generated CRM API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crmApi.middleware), // Add the CRM API middleware
});
