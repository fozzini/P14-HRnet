import { createSlice } from "@reduxjs/toolkit";

/**
* The "main" reducer
* reducer for the input fields
* @return state
*/

const initialState = {
 firstName:"",
 lastName:"",
 startDate:"",
 department:"Sales",
 dateOfBirth:"",
 street:"",
 city:"",
 state:"AL",
 zipCode:"",
 isHome:true,
};

const { actions, reducer } = createSlice({
  name: "employee",
  initialState,
  reducers: {
    reset: () => initialState,
    isHome: {
      reducer: (draft) => {
        draft.isHome = !draft.isHome;
      },
    },
    firstName: {
      prepare: (firstName ) => ({ payload: { firstName } }),
      reducer: (draft, action) => { draft.firstName=action.payload.firstName}
    },
    lastName: {
      prepare: (lastName ) => ({ payload: { lastName } }),
      reducer: (draft, action) => { draft.lastName=action.payload.lastName}
    },
    startDate: {
      prepare: (startDate ) => ({ payload: { startDate } }),
      reducer: (draft, action) => { draft.startDate=action.payload.startDate}
    },
    department: {
      prepare: (department ) => ({ payload: { department } }),
      reducer: (draft, action) => { draft.department=action.payload.department}
    },
    dateOfBirth: {
      prepare: (dateOfBirth ) => ({ payload: { dateOfBirth } }),
      reducer: (draft, action) => { draft.dateOfBirth=action.payload.dateOfBirth}
    },
    street: {
      prepare: (street ) => ({ payload: { street } }),
      reducer: (draft, action) => { draft.street=action.payload.street}
    },
    city: {
      prepare: (city ) => ({ payload: { city } }),
      reducer: (draft, action) => { draft.city=action.payload.city}
    },
    state: {
      prepare: (state ) => ({ payload: { state } }),
      reducer: (draft, action) => { draft.state=action.payload.state}
    },
    zipCode: {
      prepare: (zipCode ) => ({ payload: { zipCode } }),
      reducer: (draft, action) => { draft.zipCode=action.payload.zipCode}
    },
  },
});

export {actions};
export const {firstName, lastName, dateOfBirth, startDate,state, street, city, zipCode, department, isHome} = actions;
export default reducer;