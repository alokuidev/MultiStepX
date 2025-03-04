import React from 'react'
import FormContext from './FormContext'

const FormContextProvider = ({children}) => {
  return (
    <div>
      <FormContext.Provider value={{}}>
        {children}
      </FormContext.Provider>
    </div>
  )
}

export default FormContextProvider
