import React, { useState } from 'react';
import Department from './Department';
import Fieldset from './Fieldset';
const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [startDate, setStartDate] = useState("");

  return (
   
    <form onSubmit={""} id="create-employee">
        <label >First Name</label>
        <input 
          type="text" 
          id="first-name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}/>

        <label >Last Name</label>
        <input 
          type="text" 
          id="last-name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} />

        <label >Date of Birth</label>
        <input 
          id="date-of-birth" 
          type="text"
          value={birthday} 
          onChange={(e) => setBirthday(e.target.value)} />

        <label >Start Date</label>
        <input 
          id="start-date" 
          type="text"
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} />
          
        <Fieldset/>

        <label >Department</label>
        <Department/>
        <input type="submit" />
    </form> 
  );
};

export default Form;