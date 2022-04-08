import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const colors = [
  'white',
  'red',
  'blue'
]

const getColorClasses = (color) => {
  const bgClasses = color === 'white' ? 'bg-white hover:bg-gray-200' : `bg-${color}-600 hover:bg-${color}-700`
  const textClasses = color === 'white' ? `text-gray-500 transition hover:text-gray-900` : 'text-white'

  return `${bgClasses} ${textClasses}`
}

const Button = ({ tag = 'button', children, ...props }) => {
  const propKeys = Object.keys(props)
  
  const color = propKeys.filter(property => colors.includes(property))[0] || 'white'

  const buttonClasses = 'text-xl px-4 py-2 inline-flex items-center justify-center rounded-md transition'
  const colorClasses = getColorClasses(color)

  const classes = `${buttonClasses} ${colorClasses}`

  switch (tag) {
    case 'a':
      return <a className={ classes } { ...props }>{ children }</a>
    case 'NavLink':
      return <NavLink className={ classes } { ...props }>{ children }</NavLink>
    case 'Link':
      return <Link className={ classes } { ...props }>{ children }</Link>
    default:
      return <button className={ classes } { ...props }>{ children }</button>
  }
}

export default Button
