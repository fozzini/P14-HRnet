import React from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import MaterialTable from "material-table";
import { useSelector } from "react-redux";


const EmployeesTable = () => {
  const defaultMaterialTheme = createTheme();
  const rows = useSelector(state => state.employeesList);
  const editable = rows.map(o => ({ ...o }));

  return(
    <div className="table">
        <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              columns={[
                { title: "First Name", field: "firstName",cellStyle: {
                  color: '#000',
                  fontSize:'small',
                  },
                  headerStyle: {backgroundColor: 'rgb(204, 201, 170)',fontWeight: 'bolder', color:'#fff'}
                },
                  { title: "Last Name", field: "lastName", cellStyle: {
                    color: '#000',
                    fontSize:'small',
                  },
                  headerStyle: {backgroundColor: 'rgb(204, 201, 170)',fontWeight: 'bolder', color:'#fff'}
                },
                  { title: "Start Date", field: "startDate", cellStyle: {
                    color: '#000',
                    fontSize:'small',
                  },
                  headerStyle: {backgroundColor: 'rgb(204, 201, 170)',fontWeight: 'bolder', color:'#fff'}
                
                },
                  { title: "Department", field: "department" , cellStyle: {
                    color: '#000',
                    fontSize:'small',
                  },
                  headerStyle: {backgroundColor: 'rgb(204, 201, 170)',fontWeight: 'bolder', color:'#fff'}
                },
                  { title: "Date Of Birth", field: "dateOfBirth", cellStyle: {
                    color: '#000',
                    fontSize:'small',
                  },
                  headerStyle: {backgroundColor: 'rgb(204, 201, 170)',fontWeight: 'bolder', color:'#fff'}
                },
                  { title: "Street", field:"street", cellStyle: {
                    color: '#000',
                    fontSize:'small',
                  },
                  headerStyle: {backgroundColor: 'rgb(204, 201, 170)',fontWeight: 'bolder', color:'#fff'}
                },
                  { title: "City", field:"city", cellStyle: {
                    color: '#000',
                    fontSize:'small',
                  },
                  headerStyle: {backgroundColor: 'rgb(204, 201, 170)',fontWeight: 'bolder', color:'#fff'}
                },
                  { title: "State", field:"state", cellStyle: {
                    color: '#000',
                    fontSize:'small',
                  },
                  headerStyle: {backgroundColor: 'rgb(204, 201, 170)',fontWeight: 'bolder', color:'#fff'}
                },
                  { title: "Zip Code", field:"zipCode", cellStyle: {
                    color: '#000',
                    fontSize:'small',
                  },
                  headerStyle: {backgroundColor: 'rgb(204, 201, 170)',fontWeight: 'bolder', color:'#fff'}
                }
                  ]}
              data={editable}
              title="Current Employees"
            />
        </ThemeProvider>
    </div>
  );
}

export default EmployeesTable;