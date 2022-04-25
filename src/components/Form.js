import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { states, departments } from "../datas/formFieldSelectData";
import { pushEmployee } from "../utils/services/reducer/employees";
import { actions} from "../utils/services/reducer/employee";
import Modal from "modal-component-p14/dist/Modal";
import {
  employeeAdress,
  employeeInfos,
  employeeZipCode,
} from "../datas/formFieldData";
import FormField from "./FormField";
import FormFieldSelect from "./FormFieldSelect";
/**
* create form
*
* @param Hooks - 
* @return reducer function, handleSubmit, modal .
* @param onSubmit - functions to register form input and to launch modal.
* @return html - form
*/
const Form = () => {
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();
  const [openModal, setOpenModal] = useState(false);
  const onSubmit = () => {
    dispatch(pushEmployee());
    setOpenModal(true);
    dispatch(actions.reset());
  };

  return (
    <div className="formitem">
      <h2>Create Employee</h2>
      <form className="formitem" onSubmit={handleSubmit(onSubmit)}>
        <FormField array={employeeInfos}/>
        <fieldset className="address">
          <legend className="legend">Address</legend>
          <FormField array={employeeAdress} />
          <FormFieldSelect
            array={states}
            name="State"
            id="state"
            action={actions.state}
          />
          <FormField array={employeeZipCode} />
        </fieldset>
        <FormFieldSelect
          array={departments}
          name="Department"
          id="department"
          action={actions.department}
        />
        <input type="submit" value="Apply" className="submit"/>
      </form>
      {openModal && (
        <Modal closeModal={() => setOpenModal(false)}>
          <p>Employee Created!</p>
        </Modal>
      )}
    </div>
  );
};

export default Form;
