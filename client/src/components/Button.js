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

const Button = ({ tag = 'button', dropdown, active, className, children, ...props }) => {
  const propKeys = Object.keys(props)

  const color = propKeys.filter(property => colors.includes(property))[0] || 'white'

  const classesObj = {
    base: 'text-xl px-4 py-2 inline-flex items-center justify-center rounded-md transition',
    color: getColorClasses(color),
    active: active ? 'text-gray-900 bg-gray-200 cursor-default' : ''
  }

  const classes = `${ classesObj.base } ${ classesObj.color } ${ classesObj.active } ${ className }`

  if (dropdown) return (
    <button
      className={ classes }
      { ...props }
    >
      { children }
      <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  )

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
