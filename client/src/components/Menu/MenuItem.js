import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { closeMenu } from "../../redux/actions/menuActions"

const MenuItem = ({ tag, children, ...props }) => {
  const classes = 'block text-xl text-gray-500 hover:text-gray-900 py-2 px-4 transition bg-white hover:bg-gray-200 group-last:rounded-b group-first:rounded-t'
  const dispatch = useDispatch()

  return (
    <li
      className="group"
    >
      <Link
        className={classes}
        onClick={ () => dispatch(closeMenu()) }
        { ...props }
      >
        { children }
      </Link>
    </li>
  )
}

export default MenuItem
