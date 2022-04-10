import React from 'react'

const Avatar = ({ className, children, ...props }) => {
  const classes = `block rounded-full overflow-hidden border-2 w-10 md:w-12 ${className}`

  return (
    <button
      className={classes}
      {...props}
    >
      <img
        src="https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png"
        alt="avatar image"
        {...props}
      />
    </button>
  )
}

export default Avatar
