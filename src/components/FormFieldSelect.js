import React from 'react'
import { useDispatch, useSelector} from 'react-redux';

function FormFieldSelect({array, name, id, action}) {
    const dispatch = useDispatch();
    const value = useSelector((status) => status.employee)
    return (
      <div>
          <div className="formitem">
          <label>{name}</label>
          <select
            value={value[id]}
            onChange={(e) => {
              dispatch(action(e.target.value));
            }}
          >
            {array.map((e) => (
              <option key={e.name} value={e.abbreviation}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
}

export default FormFieldSelect
