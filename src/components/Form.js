import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../utils/services/reducer/employee';
import states from '../datas/states.js'

const Form = () => {
  const dispatch = useDispatch();
  const {firstName, lastName, dateOfBirth, startDate,state, street, city, zipCode, department} = useSelector((status) => status.employee);
  
  return (
   
    <form id="create-employee">
        <label >First Name</label>
        <input 
          type="text"  
          value={firstName} 
          onChange={(e) => {dispatch(actions.firstName(e.target.value))}}/>
        <label >Last Name</label>
        <input 
          type="text"  
          value={lastName} 
          onChange={(e) => {dispatch(actions.lastName(e.target.value))}}/>

        <label >Date of Birth</label>
        <input 
          type="date"
          value={dateOfBirth} 
          onChange={(e) => {dispatch(actions.dateOfBirth(e.target.value))}}/>

        <label >Start Date</label>
        <input  
          type="date"
          value={startDate} 
          onChange={(e) => {dispatch(actions.startDate(e.target.value))}}/>

        <fieldset className="address">
          <legend>Address</legend>

          <label >Street</label>
          <input 
            type="text" 
            value={street} 
            onChange={(e) => {dispatch(actions.street(e.target.value))}}/>

          <label >City</label>
          <input 
            type="text"
            value={city} 
            onChange={(e) => {dispatch(actions.city(e.target.value))}}/>

          <label >State</label>
          <select 
            value={state} 
            onChange={(e) => {dispatch(actions.state(e.target.value))}}>
            {states.map((e) => <option key={e.name} value={e.abbreviation}>{e.name}</option>)}
          </select>

          <label >Zip Code</label>
          <input 
            type="number"
            value={zipCode} 
            onChange={(e) => {dispatch(actions.zipCode(e.target.value))}}/>
        </fieldset>

        <label >Department</label>
        <select id="department" value={department} onChange={(e) => {dispatch(actions.department(e.target.value))}}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
    </form> 
  );
};

export default Form;