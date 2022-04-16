import { useDispatch } from "react-redux"

import mergeClasses from "../../helpers/mergeClasses"
import { closeMenu } from "../../redux/actions/menuActions"
import { Link } from "react-router-dom"

const MenuItem = ({ tag, children, ...props }) => {
  const classes = {
    base: 'block text-xl text-gray-500 py-2 px-4 transition bg-white group-last:rounded-b group-first:rounded-t',
    hover: 'hover:text-gray-900 hover:bg-gray-200',
    dark: 'dark:text-white dark:bg-slate-700 dark:hover:bg-slate-800'
  }
  
  const dispatch = useDispatch()

  return (
    <li
      className="group"
    >
      <Link
        className={mergeClasses(classes)}
        onClick={ () => dispatch(closeMenu())}
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}

export default MenuItem
