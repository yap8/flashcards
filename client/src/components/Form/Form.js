import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Form = ({ children, className, ...rest }) => {
  const { error, message } = useSelector(state => state.app)

  const classes = `w-full max-w-full md:max-w-lg m-auto bg-white shadow-md rounded px-4 py-4 pb-1 md:px-8 md:py-6 md:pb-4 ${ className }`

  useEffect(() => {
    if (error && message) toast.error(message)
  }, [error, message])

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
