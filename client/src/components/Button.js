import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Button = ({ tag, children, className, ...rest }) => {
  const buttonClasses = 'text-xl px-4 py-2 inline-flex items-center justify-center rounded-md shadow-sm text-white transition'
  const defaultColorsClasses = 'bg-blue-600 hover:bg-blue-700'
  const classes = `${buttonClasses} ${className ? className : defaultColorsClasses}`

  switch (tag) {
    case 'a':
      return <a className={ classes } { ...rest }>{ children }</a>
    case 'NavLink':
      return <NavLink className={ classes } { ...rest }>{ children }</NavLink>
    case 'Link':
      return <Link className={ classes } { ...rest }>{ children }</Link>
    default:
      return <button className={ classes } { ...rest }>{ children }</button>
  }
}

export default Button
