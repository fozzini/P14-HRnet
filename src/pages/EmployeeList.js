import React from 'react';
import EmployeesTable from '../components/EmployeesTable';
import Footer from '../components/Footer';
import Header from '../components/Header';
/**
* create page employee list
*
* @return html - page employee list
*/
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