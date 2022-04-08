import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { openMenu } from "../redux/actions/appActions"
import { logout } from "../redux/actions/authActions"
import Button from "./Button"
import Menu from "./Menu/Menu"
import MenuItem from "./Menu/MenuItem"

const Header = () => {
  const { user } = useSelector(state => state.auth)
  const { menus } = useSelector(state => state.app)

  const dispatch = useDispatch()

  const handleMenuButtonClick = () => {
    if (menus.header) return

    dispatch(openMenu('header'))
  }

  return (
    <header className="shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link className="text-4xl font-semibold" to="/">FlashCards</Link>
        <ul className="flex">
          {user ? <>
            <li className="mr-4">
              <Button
                dropdown
                active={ menus.header }
                data-menu="header"
                onClick={ handleMenuButtonClick }
              >Collections</Button>
              <Menu open={ menus.header } >
                <MenuItem to="/collections">
                  Library
                </MenuItem>
                <MenuItem to="/collections/create">
                  Create
                </MenuItem>
              </Menu>
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
