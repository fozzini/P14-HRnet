import { configureStore } from "@reduxjs/toolkit";
import  employee  from "../reducer/employee";

/**
* the store, 
*
* @return combined reducers
*/

export const store = configureStore({
  reducer: {
    employee: employee
  },
});