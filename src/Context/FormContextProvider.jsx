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
      <FormContext.Provider value={{formField, setFormField , FormStatus , setFormstatus }}>
        {children}
      </FormContext.Provider>
  )
}

export default FormContextProvider
