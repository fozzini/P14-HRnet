import { createSlice } from "@reduxjs/toolkit";
/**
* The Table reducer
* reducer for the table
* @param pushEmployee - create the employees values.
* @return table state 
*/
const { actions, reducer } = createSlice({
  name: "employeesList",
  initialState : [],
  reducers: {
    addEmployee: {
      prepare: (body) => ( {payload:  
        {firstName:body.firstName,
        lastName:body.lastName,
        startDate:body.startDate,
        department:body.department,
        dateOfBirth:body.dateOfBirth,
        street:body.street,
        city:body.city,
        state:body.state,
        zipCode:body.zipCode}
      }),
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