import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "employeesList",
  initialState : [],
  reducers: {
    addEmployee: {
      prepare: (body) => ( {payload:  [
        {cellValue:body.firstName,category:"firstName"},
        {cellValue:body.lastName,category:"lastName"},
        {cellValue:body.startDate,category:"startDate"},
        {cellValue:body.department,category:"department"},
        {cellValue:body.dateOfBirth,category:"dateOfBirth"},
        {cellValue:body.street,category:"street"},
        {cellValue:body.city,category:"city"},
        {cellValue:body.state,category:"state"},
        {cellValue:body.zipCode,category:"zipCode"},
      ],}),
      reducer: (draft, action) => { draft.push(action.payload)}
    },
  },
}
);

export const pushEmployee = () => 
 (dispatch, getState) => {
    
  const body = getState().employee ;
  dispatch(actions.addEmployee(body))
  
};

export { actions }
export default reducer;