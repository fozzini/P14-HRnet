import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { actions } from "../utils/services/reducer/employee";
/**
* create form fields
*
* @param Hooks - 
* @return reducer function, register the input, the state .
* @param register - hooks to register the form input.
* @param array - array of input stored in data.
* @param value - hooks to get the state of the input value.
* @return html - form field
*/
function FormField({ array }) {
  const dispatch = useDispatch();
  const { register } = useForm({ shouldUseNativeValidation: true });
  const value = useSelector((status) => status.employee)
  return (
    <div>
      {array.map((field, index) => (
        <div className="formitem" key={index}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            value={value[field.id]}
            aria-label={field.id}
            {...register(`${field.id}`, { required: "Please fill out this field"  })}
            onChange={(e) => {
              dispatch(actions[field.id](e.target.value));
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default FormField;
