import React from 'react'

const Avatar = ({ onClick, children, ...props }) => {
  return (
    <button
      className="rounded-full overflow-hidden border-2"
      onClick={ onClick }
      { ...props }
    >
      <img
        className="w-12"
        src="https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png"
        alt="avatar image"
      />
    </button>
  )
}

export default Avatar
