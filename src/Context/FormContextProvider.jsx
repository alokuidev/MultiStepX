import React, { useState } from 'react'
import FormContext from './FormContext'

const FormContextProvider = ({children}) => {
  
  const [formField, setFormField] = useState({
    name:'',
    email:'',
    pass:''
  })  

  return (
    <div>
      <FormContext.Provider value={{formField, setFormField}}>
        {children}
      </FormContext.Provider>
    </div>
  )
}

export default FormContextProvider
