import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../utils/services/reducer/employee';
import states from '../datas/states.js'
import { pushEmployee } from '../utils/services/reducer/employees';
import Modal from './Modal';

const Form = () => {
  const dispatch = useDispatch();
  const {firstName, lastName, dateOfBirth, startDate,state, street, city, zipCode, department} = useSelector((status) => status.employee);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = () => { 
    dispatch(pushEmployee());
    dispatch(actions.reinit());
    setOpenModal(true);
  }

  return (
    <div>
    <form className="formitem" onSubmit={handleSubmit(onSubmit)} >
      <div className="formitem" >
        <label >First Name</label>
        <input 
          type="text" 
          id="firstName" 
          value={firstName}
          {...register("firstName", { required: true })}
          onChange={(e) => {dispatch(actions.firstName(e.target.value))}}/>
          {errors.firstName?.type === 'required' && "firstName is required"}
      </div>
      <div className="formitem">
        <label >Last Name</label>
        <input 
          type="text"  
          id="lastName"
          value={lastName} 
          {...register("lastName", { required: true })}
          onChange={(e) => {dispatch(actions.lastName(e.target.value))}}/>
          {errors.lastName?.type === 'required' && "lastName is required"}
      </div>
      <div className="formitem">
        <label >Date of Birth</label>
        <input 
          type="date"
          value={dateOfBirth} 
          {...register("dateOfBirth", { required: true })}
          onChange={(e) => {dispatch(actions.dateOfBirth(e.target.value))}}/>
          {errors.dateOfBirth?.type === 'required' && "dateOfBirth is required"}
      </div>
      <div className="formitem">     
        <label >Start Date</label>
        <input  
          type="date"
          value={startDate} 
          {...register("startDate", { required: true })}
          onChange={(e) => {dispatch(actions.startDate(e.target.value))}}/>
          {errors.startDate?.type === 'required' && "startDate is required"}
      </div>
      <fieldset className="address">
        <legend>Address</legend>
        <div className="formitem">
          <label >Street</label>
          <input 
            type="text" 
            value={street} 
            {...register("street", { required: true })}
            onChange={(e) => {dispatch(actions.street(e.target.value))}}/>
            {errors.street?.type === 'required' && "street is required"}   
        </div>    
        <div className="formitem">
          <label >City</label>
          <input 
            type="text"
            value={city} 
            {...register("city", { required: true })}
            onChange={(e) => {dispatch(actions.city(e.target.value))}}/>
            {errors.city?.type === 'required' && "city is required"}
        </div>
        <div className="formitem">
          <label >State</label>
          <select 
            value={state} 
            onChange={(e) => {dispatch(actions.state(e.target.value))}}>
            {states.map((e) => <option key={e.name} value={e.abbreviation}>{e.name}</option>)}
          </select>
        </div>
        <div className="formitem">
          <label >Zip Code</label>
          <input 
            type="number"
            value={zipCode} 
            {...register("zipCode", { required: true })}
            onChange={(e) => {dispatch(actions.zipCode(e.target.value))}}/>
            {errors.zipCode?.type === 'required' && "zipCode is required"}
        </div>
      </fieldset>
      <div className="formitem">
        <label >Department</label>
        <select id="department" value={department} onChange={(e) => {dispatch(actions.department(e.target.value))}}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
        </div>
      <input type="submit" />
    </form> 
    { openModal && (<Modal closeModal={() => setOpenModal(false)}> <p>Employee Created!</p> </Modal>)}
    </div>
  );
};

export default Form;