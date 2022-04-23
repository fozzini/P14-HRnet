import React from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import MaterialTable from "material-table";
import { useSelector } from "react-redux";

const EmployeesTable = () => {
  const defaultMaterialTheme = createTheme();
  const rows = useSelector(state => state.employeesList);
  const editable = rows.map(o => ({ ...o }));

  return(
    <div style={{ width: '100%', height: '100%' }}>
        <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              columns={[
              { title: "First Name", field: "firstName" },
              { title: "Last Name", field: "lastName" },
              { title: "Start Date", field: "startDate"},
              { title: "Department", field: "department" },
              { title: "Date Of Birth", field: "dateOfBirth"},
              { title: "Street", field:"street"},
              { title: "City", field:"city"},
              { title: "State", field:"state"},
              { title: "Zip Code", field:"zipCode"}
              ]}
              data={editable}
              title="Current Employees"
            />
        </ThemeProvider>
    </div>
  );
}

export default EmployeesTable;