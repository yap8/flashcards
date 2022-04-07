import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Button = ({ tag, children, color = 'blue', ...rest }) => {
  const buttonClasses = 'text-xl px-4 py-2 inline-flex items-center justify-center rounded-md shadow-sm text-white transition'
  const colorClasses = `bg-${color}-600 hover:bg-${color}-700`

  const classes = `${buttonClasses} ${colorClasses}`

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
