import React, { useState } from 'react';
import { Table } from '@codbear/reactable';
import { columnItems } from '../datas/materialTableData';
import { useSelector } from 'react-redux';


const TableEmployee = () => {
  const rows = useSelector(state => state.employeesList);
  const editable = rows.map(o => ({ ...o }));
  const [itemsPerPage, setItemsPerPage] = useState(5);
  return (
    <div className="table" >
      <p className="listTitle" role="region" aria-label="list title" >Employees List</p>
      <Table 
      data={editable} 
      columns={columnItems} 
      itemsPerPage={itemsPerPage}
      onChangeItemsPerPage={setItemsPerPage}
      itemsPerPageOptions={[5, 10, 25, 50, 100]}
      variant="filled"
      hasSearchBar
      />
    </div>
  );
};

export default TableEmployee;