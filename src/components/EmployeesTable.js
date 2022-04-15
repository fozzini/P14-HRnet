import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from "react-redux-table";

const headArray = [
  { title: "First Name", category: "firstName" },
  { title: "Last Name", category: "lastName" },
  { title: "Start Date", category: "startDate" },
  { title: "Department", category: "department" },
  { title: "Date Of Birth", category: "dateOfBirth" },
  { title: "Street", category:"street"},
  { title: "City", category:"city"},
  { title: "State", category:"state"},
  { title: "Zip Code", category:"zipCode"},
];

const EmployeesTable = () => {
  const rowsArray = useSelector(state => state.employeesList);

  return (
    <>
      <Table
        headersArray={headArray}
        rowsContent={rowsArray}
        title=""
        filter={true}
        entriesSelector={[10, 100]}
        showEntries={true}
        hideButtons={false}
      />
    </>
  );
}


export default EmployeesTable;