import React from 'react';
import { Link } from 'react-router-dom';
import EmployeesTable from '../components/EmployeesTable';
const EmployeeList = () => {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <EmployeesTable/>
      <Link to={`/`} >Home</Link>
    </div>
  );
};

export default EmployeeList;