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
              <Button
                dropdown
              >Collections</Button>
            </li>
            <li className="mr-4">
              <Button
                tag="NavLink"
                to="/profile"
              >Profile</Button>
            </li>
            <li>
              <Button
                red
                onClick={() => dispatch(logout())}
              >Logout</Button>
            </li>
          </> : <>
            <li className="mr-4">
              <Button
                tag="NavLink"
                to="/login"
              >Login</Button>
            </li>
            <li>
              <Button
                blue
                tag="NavLink"
                to="/register"
              >Register</Button>
            </li>
          </>}
        </ul>
      </div>
    </header>
  )
}

  //  text-base font-medium 

export default Header
