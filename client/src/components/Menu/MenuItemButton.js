import React from 'react'

const MenuItemButton = ({ children, ...props }) => {
  const classes = 'block text-xl text-gray-500 hover:text-gray-900 py-2 px-4 transition bg-white hover:bg-gray-200 group-last:rounded-b group-first:rounded-t'

  return (
    <li
      className="group"
    >
      <button
        className={classes}
        { ...props }
      >
        { children }
      </button>
    </li>
  )
}

export default MenuItemButton
