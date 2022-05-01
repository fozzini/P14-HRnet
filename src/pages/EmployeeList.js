import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import TableEmployee from 'table-plugin/dist/TableEmployee';
/**
* create page employee list
* @param rows - get the row state to send to the table
* @param editable - create row object.
* @return html - page employee list
*/
const EmployeeList = () => {
  const rows = useSelector(state => state.employeesList);
  const editable = rows.map(o => ({ ...o }));
  return (
    <div>
      <Header/>
      <div id="employee-div" className="container">
        <TableEmployee data={editable}/>
      </div>
      <Footer/>
    </div>
  );
};

export default EmployeeList;