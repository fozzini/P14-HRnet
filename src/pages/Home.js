import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Modal from '../components/Modal';
import { actions } from '../utils/services/reducer/employee';
import { dataList } from "../datas/employeesList";
const Home = () => {
  const dispatch = useDispatch();
  const {firstName, lastName, dateOfBirth, startDate,state, street, city, zipCode, department} = useSelector((status) => status.employee);
  const [openModal, setOpenModal] = useState(false);
  console.log(dataList);
  const validateEmployee = () => {
    dataList.push({
      FirstName: firstName,
      LastName: lastName,
      StartDate: startDate,
      Department: department,
      DateOfBirth: dateOfBirth,
      Street: street,
      City: city,
      State: state,
      ZipCode: zipCode,
    })
  }
  
  return (
    <div>
      <div className="container"></div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={`/employee-list`}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
        <button type="Button" onClick={() =>{ validateEmployee();dispatch(actions.reinit());setOpenModal(true)}} className="button">Save</button>
      </div>
      { openModal && (
      <Modal closeModal={() => setOpenModal(false)}>
        <p>Employee Created!</p>
      </Modal>)}
    </div>
  );
};

export default Home;