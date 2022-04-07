import React from 'react'

const Title = ({ className, children }) => {
  return (
    <h1
      className={'title' + ' ' + className}
    >
      {children}
    </h1>
  )
}

export default Title
