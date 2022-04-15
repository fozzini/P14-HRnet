import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Modal from '../components/Modal';
import { actions } from '../utils/services/reducer/employee';
import {pushEmployee} from '../utils/services/reducer/employees';
const Home = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  
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
        <button type="Button" onClick={() =>
          { 
          dispatch(pushEmployee());
          dispatch(actions.reinit());
          setOpenModal(true)}} 
          className="button">Save</button>
      </div>
      { openModal && (
      <Modal closeModal={() => setOpenModal(false)}>
        <p>Employee Created!</p>
      </Modal>)}
    </div>
  );
};

export default Home;