import mergeClasses from '../../helpers/mergeClasses'

const MenuItemButton = ({ children, ...props }) => {
  const classes = {
    base: 'block w-full text-left text-xl text-gray-500 hover:text-gray-900 py-2 px-4 transition bg-white hover:bg-gray-200 group-last:rounded-b group-first:rounded-t',
    dark: 'dark:text-white dark:bg-slate-700 dark:hover:bg-slate-800'
  }

  return (
    <li
      className="group"
    >
      <button
        className={mergeClasses(classes)}
        {...props}
      >
        {children}
      </button>
    </li>
  )
}

export default MenuItemButton
