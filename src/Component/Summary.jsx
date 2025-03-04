import React, { useContext } from 'react'
import FormContext from '../Context/FormContext';

function Summary() {
  
  const {formField} = useContext(FormContext)  

  if (!formField.name && !formField.email && !formField.pass) return null;
  return (
    <>
      <div className="summary-container">
    <h2>Review & Confirm</h2>
    <p className="subtitle">Please check your details before submission</p>

    <div className="summary-box">
        <p><strong>Name:</strong> <span id="summary-name"></span></p>
        <p><strong>Email:</strong> <span id="summary-email"></span></p>
        <p><strong>Password:</strong> <span id="summary-password"></span></p>
    </div>

    <div className="buttons">
        <button id="editBtn">🔄 Edit</button>
        <button id="submitBtn">✅ Confirm & Submit</button>
    </div>
</div>

    </>
  )
}

export default Summary;
