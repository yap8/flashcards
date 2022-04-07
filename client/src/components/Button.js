import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Button = ({ tag, children, color = 'white', ...rest }) => {
  const buttonClasses = 'text-xl px-4 py-2 inline-flex items-center justify-center rounded-md transition'
  const bgClasses = color === 'white' ? 'bg-white hover:bg-gray-200' : `bg-${color}-600 hover:bg-${color}-700`
  const textClasses = color === 'white' ? `text-gray-500 transition hover:text-gray-900` : 'text-white'

  const classes = `${buttonClasses} ${bgClasses} ${textClasses}`

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
