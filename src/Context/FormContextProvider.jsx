import React, { useState } from 'react'
import FormContext from './FormContext'

const FormContextProvider = ({children}) => {
  
  const [FormStatus, setFormstatus] = useState(false)  
  const [formField, setFormField] = useState({
    name:'',
    email:'',
    pass:''
  })  

  return (
    <div>
      <FormContext.Provider value={{formField, setFormField , FormStatus , setFormstatus }}>
        {children}
      </FormContext.Provider>
    </div>
  )
}

export default FormContextProvider
