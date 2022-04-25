import React from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import MaterialTable from "material-table";
import { useSelector } from "react-redux";
import { columns } from "../datas/materialTableData";
/**
* create Table
*
* @return html - Table
*/
const EmployeesTable = () => {
  const defaultMaterialTheme = createTheme();
  const rows = useSelector(state => state.employeesList);
  const editable = rows.map(o => ({ ...o }));

  return(
    <div className="table">
        <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              columns={columns}
              data={editable}
              title="Current Employees"
            />
        </ThemeProvider>
    </div>
  );
}

export default EmployeesTable;