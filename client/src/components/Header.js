import { useDispatch, useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import { logout } from "../redux/actions/authActions"
import Button from "./Button"

const Header = () => {
  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  return (
    <header className="shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link className="text-4xl font-semibold" to="/">FlashCards</Link>
        <ul className="flex">
          {user ? <>
            <li className="mr-4">
              <NavLink
                className="text-xl px-4 py-2 inline-flex items-center justify-center text-gray-500 transition hover:text-gray-900"
                to="/collections"
              >Collections</NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                className="text-xl px-4 py-2 inline-flex items-center justify-center text-gray-500 transition hover:text-gray-900"
                to="/profile"
              >Profile</NavLink>
            </li>
            <li>
              <button
                className="text-xl px-4 py-2 inline-flex items-center justify-center rounded-md shadow-sm text-white bg-red-600 transition hover:bg-red-700"
                onClick={() => dispatch(logout())}
              >Logout</button>
            </li>
          </> : <>
            <li className="mr-4">
              <NavLink
                className="text-xl px-4 py-2 inline-flex items-center justify-center text-gray-500 transition hover:text-gray-900"
                to="/register"
              >Register</NavLink>
            </li>
            <li>
              <Button
                tag={'NavLink'}
                className="bg-indigo-600 hover:bg-indigo-700"
                to="/login"
              >Login</Button>
            </li>
          </>}
        </ul>
      </div>
    </header>
  )
}

  //  text-base font-medium 

export default Header
