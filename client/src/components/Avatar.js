import React from 'react'

const Avatar = ({ className, size = 12, children, ...props }) => {
  const classes = `block rounded-full overflow-hidden border-2 ${className}`

  return (
    <button
      className={ classes }
      { ...props }
    >
      <img
        className={`w-${ size }`}
        src="https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png"
        alt="avatar image"
      />
    </button>
  )
}

export default Avatar
