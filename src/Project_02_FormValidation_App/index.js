/** @format */

import React, { Fragment, useState } from "react";
import InputField from "../Component/InputField/InputField";
import style from "./FormValidation.module.css";
import Button from "../Component/Button/Button";

const FormValidation = (props) => {
  const [formState, setFormState] = useState({
    firstName: { value: "", error: false },
    lastName: { value: "", error: false },
    age: { value: 0, error: false },
  });

  const onChangeListener = (e) => {
    formState[e.target.name]["value"] = e.target.value;
    setFormState((prevState) => {
      return { ...formState };
    });
  };

  const onSubmitListener = (e) => {
    e.preventDefault();

    for (let state in formState) {
      if (formState[state]["value"] === "" || formState[state]["value"] === 0) {
        formState[state]["error"] = true;
      } else {
        formState[state]["error"] = false;
      }

      setFormState((prevState) => {
        return { ...formState };
      });
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitListener} className={`${style.container}`}>
        <InputField
          name={"firstName"}
          placeholder={"enter your first name"}
          type={"text"}
          onChangeListener={onChangeListener}
          error={formState["firstName"]["error"]}
        />
        <InputField
          name={"lastName"}
          placeholder={"enter your last name"}
          type={"text"}
          onChangeListener={onChangeListener}
          error={formState["lastName"]["error"]}
        />
        <InputField
          name={"age"}
          placeholder={"enter your age"}
          type={"number"}
          onChangeListener={onChangeListener}
          error={formState["age"]["error"]}
        />
        <div style={{ marginTop: "4rem" }}>
          <Button name={"submit"} color={"indigo"} />
        </div>
      </form>
    </Fragment>
  );
};

export default FormValidation;
