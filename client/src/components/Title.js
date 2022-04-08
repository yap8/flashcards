const Title = ({ className = '', children, ...props }) => {
  const classes = `text-4xl font-semibold mb-6 ${ className }`

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
