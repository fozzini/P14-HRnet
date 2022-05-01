import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
/**
* create form field select
*
* @param Hooks - 
* @param value - hooks to get the state of the input value.
* @param array - array of input stored in data.
* @param name, id  - value used to create the field.
* @param action - action to dispatch in the reducer.
* @return reducer function, the state .
* @return html - form field select
*/
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
