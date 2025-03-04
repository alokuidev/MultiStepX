import React, { useContext } from "react";
import FormContext from "../Context/FormContext";

function Summary() {
  const { formField, FormStatus, setFormstatus } = useContext(FormContext);

  const editForm = () => {
    setFormstatus(false);
  };

  const submitForm = () => {
    console.log(formField);
  };

  if (FormStatus === false) return null;
  return (
    <>
      <div className="summary-container">
        <h2>Review & Confirm</h2>
        <p className="subtitle">Please check your details before submission</p>

        <div className="summary-box">
          <p>
            <strong>Name:</strong>{" "}
            <span id="summary-name">{formField.name}</span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span id="summary-email">{formField.email}</span>
          </p>
          <p>
            <strong>Password:</strong>{" "}
            <span id="summary-password">{formField.pass}</span>
          </p>
        </div>

        <div className="buttons">
          <button id="editBtn" onClick={editForm}>
            🔄 Edit
          </button>
          <button id="submitBtn" onClick={submitForm}>
            ✅ Confirm & Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Summary;
