import React, { useState } from 'react';
import states from '../datas/states.js'

const Fieldset = () => {
  const [state, setState] = useState("");
  
  return (
    <fieldset className="address">
      <legend>Address</legend>

      <label >Street</label>
      <input type="text" />

      <label >City</label>
      <input type="text" />

      <label >State</label>
      <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
        {states.map((e) => <option key={e.name} value={e.abbreviation}>{e.name}</option>)}
      </select>

      <label >Zip Code</label>
      <input type="number" />
    </fieldset>
  );
};

export default Fieldset;