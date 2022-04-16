import mergeClasses from '../helpers/mergeClasses'

const Avatar = ({ className, children, ...props }) => {
  const classes = {
    base: 'block rounded-full overflow-hidden border-2 w-10 md:w-12',
    dark: 'dark:border-blue-300',
    inherited: className
  }

  return (
    <button
      className={mergeClasses(classes)}
      {...props}
    >
      <img
        src="https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png"
        alt="avatar"
        {...props}
      />
    </button>
  )
}

export default Avatar
