import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SpinnerIcon from './Icons/SpinnerIcon'

const colors = [
  'white',
  'red',
  'blue'
]

const getColorClasses = (color) => {
  switch (color) {
    case 'red':
      return 'bg-red-600 hover:bg-red-700 text-white'
    case 'blue':
      return 'bg-blue-600 hover:bg-blue-700 text-white'
    default:
      return 'bg-white hover:bg-gray-200 text-gray-500 transition hover:text-gray-900'
  }
}

const Button = ({ tag, dropdown, className = '', children, ...props }) => {
  const propKeys = Object.keys(props)

  const color = propKeys.filter(property => colors.includes(property))[0] || 'white'

  const classes = `text-xl px-4 py-2 inline-flex items-center justify-center rounded-md transition ${getColorClasses(color)} ${className}`

  if (dropdown) return (
    <button className={classes} {...props}>
      {children}
      <SpinnerIcon />
    </button>
  )

  switch (tag) {
    case 'a':
      return <a className={classes} {...props}>{children}</a>
    case 'NavLink':
      return <NavLink className={classes} {...props}>{children}</NavLink>
    case 'Link':
      return <Link className={classes} {...props}>{children}</Link>
    default:
      return <button className={classes} {...props}>{children}</button>
  }
}

export default Button
