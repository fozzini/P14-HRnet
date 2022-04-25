import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../utils/services/reducer/employee';
/**
* create nav header
* @return html - Header
*/
const Header = () => {
  
  const {isHome} = useSelector((status) => status.employee)
  const dispatch = useDispatch()
  const toEmployeeList = <Link to={`/employee-list`} onClick= {() => dispatch(actions.isHome())} ><p>View Current Employees</p></Link>
  const toHome = <Link to={`/`} onClick= {() => dispatch(actions.isHome())}><p>Home</p></Link>

  return (
    <div className="header">
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div>
            <Button>{
            isHome
            ? 
            toEmployeeList 
            : 
            toHome
            }</Button>
        </div> 
    </div>
  );
};

export default Header;