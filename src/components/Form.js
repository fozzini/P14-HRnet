import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { states, departments } from "../datas/formFieldSetData.js";
import { pushEmployee } from "../utils/services/reducer/employees";
import { actions} from "../utils/services/reducer/employee";
import Modal from "./Modal";
import {
  employeeAdress,
  employeeInfos,
  employeeZipCode,
} from "../datas/formFieldData";
import FormField from "./FormField";
import FormFieldSet from "./FormFieldSet";
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
    <div>
      <form className="formitem" onSubmit={handleSubmit(onSubmit)}>
        <FormField array={employeeInfos}/>
        <fieldset className="address">
          <legend>Address</legend>
          <FormField array={employeeAdress} />
          <FormFieldSet
            array={states}
            name="State"
            id="state"
            action={actions.state}
          />
          <FormField array={employeeZipCode} />
        </fieldset>
        <FormFieldSet
          array={departments}
          name="Department"
          id="department"
          action={actions.department}
        />
        <input type="submit" value="Apply"/>
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
