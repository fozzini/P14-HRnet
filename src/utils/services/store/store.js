import { configureStore } from "@reduxjs/toolkit";
import  employee  from "../reducer/employee";
import  employeesList  from "../reducer/employees";
/**
* the store, 
*
* @return combined reducers
*/
export const store = configureStore({
  reducer: {
    employee: employee,
    employeesList: employeesList,
  },
});

