const Title = ({ className = '', children, ...props }) => {
  const classes = `text-3xl md:text-4xl font-semibold mb-4 md:mb-6 ${ className }`

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
