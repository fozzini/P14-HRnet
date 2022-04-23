import React from 'react';
import { Link } from 'react-router-dom';
import EmployeesTable from '../components/EmployeesTable';

const EmployeeList = () => {
  return (
    <div id="employee-div" className="container">
      <Link to={`/`} >Home</Link>
      <EmployeesTable/>
      
    </div>
  );
};

export default EmployeeList;