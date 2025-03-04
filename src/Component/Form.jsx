import React, { useContext, useRef, useState } from "react";
import FormContext from "../Context/FormContext";

const Form = () => {
   
  const {formField , setFormField} = useContext(FormContext);
  
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [pass, setPass] = useState('');
  

  const [ativeField, setActiveField] = useState('name');
  
   const SubmitForm = () =>{
    setFormField({
        name,
        email,
        pass
    })
   } 

   return (
    <div className="form-container">
      <h2>Complete Your Profile</h2>
      <p className="subtitle">Fill in the details to proceed</p>

      <div className="step active">
        <label htmlFor="name">Full Name</label>
        <input type="text"  onChange={(e) => setName(e.target.value.trim())} value={name} id="name" placeholder="Enter your name" />
      </div>

      <div className={`step ${ formField.email === '' ? "" : "active"}`}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value.trim())} placeholder="Enter your email" />
      </div>

      <div className={`step ${ formField.pass !== '' && formField.email !== '' ?  "active" : ""}`}>
        <label htmlFor="password">Create Password</label>
        <input
          type="password"
          id="password" 
          value={pass}
          onChange={(e) => setPass(e.target.value.trim())}
          placeholder="Enter a secure password"
        />
      </div>

      <div className="buttons">
        <button id="prevBtn" disabled>
          ⬅ Previous
        </button>
        <button id="nextBtn" onClick={SubmitForm}>Next ➡</button>
      </div>
    </div>
  );
};

export default Form;
