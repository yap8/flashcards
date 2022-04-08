import React from 'react'

const Form = ({ children, className, ...rest }) => {
  const classes = `w-full max-w-lg m-auto bg-white shadow-md rounded px-8 py-6 pb-4 ${ className }`

  return (
    <form
      className={ classes }
      { ...rest }
    >
      { children }
    </form>
  )
}

export default Form
