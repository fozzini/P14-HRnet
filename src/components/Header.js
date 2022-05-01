
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../utils/services/reducer/employee';
/**
* create nav header
* @param isHome - hooks to get the state.
* @param toEmployeeList & toHome - button to redirect to the selected page used with a ternary function .
* @return html - Header
*/
const Header = () => {
  
  const {isHome} = useSelector((status) => status.employee)
  const dispatch = useDispatch()
  const toEmployeeList = <Link to={`/employee-list`} onClick= {() => dispatch(actions.isHome())}  aria-label="employeeList" ><p>View Current Employees</p></Link>
  const toHome = <Link to={`/`} onClick= {() => dispatch(actions.isHome())}  aria-label="home"><p>Home</p></Link>

  return (
    <div className="header">
        <div className="title" role="region">
            <h1>HRnet</h1>
        </div>
        <div>
            <button className="button">{
            isHome
            ? 
            toEmployeeList 
            : 
            toHome
            }</button>
        </div> 
    </div>
  );
};

export default Header;