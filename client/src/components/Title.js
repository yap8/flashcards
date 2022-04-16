import mergeClasses from '../helpers/mergeClasses'

const Title = ({ className, children, ...props }) => {
  const classes = {
    base: `text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-center md:text-left`,
    dark: 'dark:text-white',
    inherited: className || ''
  }

  return (
    <h1
      className={mergeClasses(classes)}
      {...props}
    >
      {children}
    </h1>
  )
}

export default Title
