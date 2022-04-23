import React from 'react';
import { Link } from 'react-router-dom';
import EmployeesTable from '../components/EmployeesTable';
import Footer from '../components/Footer';
import Header from '../components/Header';

const EmployeeList = () => {
  return (
    <div>
      <Header/>
      <div id="employee-div" className="container">
        <EmployeesTable/>
      </div>
      <Footer/>
    </div>
  );
};

export default EmployeeList;