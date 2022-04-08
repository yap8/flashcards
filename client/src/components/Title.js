const Title = ({ center, children, ...props }) => {
  const classes = `text-3xl font-semibold mb-6 ${ center ? 'text-center' : '' }`

  return (
    <h1
      className={ classes }
      { ...props }
    >
      { children }
    </h1>
  )
}

export default Title
