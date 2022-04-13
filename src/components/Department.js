import React, { useState } from 'react';
const Department = () => {
  const [department, setDepartment] = useState("");
  return (
    
    <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
    </select>
  );
};

export default Department;