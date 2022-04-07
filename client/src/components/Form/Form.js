import React from 'react'

const Form = ({ children, ...rest }) => {
  return (
    <form
      className="w-full max-w-lg m-auto bg-white shadow-md rounded px-8 py-6 pb-4"
      { ...rest }
    >
      {children}
    </form>
  )
}

export default Form
