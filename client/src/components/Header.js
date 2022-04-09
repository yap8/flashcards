import { useDispatch, useSelector } from "react-redux"

import { Link } from "react-router-dom"
import Avatar from "./Avatar"
import Button from "./Button"
import Menu from "./Menu/Menu"
import MenuItem from "./Menu/MenuItem"

import { closeMenu, openMenu } from "../redux/actions/menuActions"
import { logout } from "../redux/actions/authActions"
import MenuItemButton from "./Menu/MenuItemButton"

const Header = () => {
  const { user } = useSelector(state => state.auth)
  const menu = useSelector(state => state.menu)

  const dispatch = useDispatch()

  const handleMenuButtonClick = (e) => {
    if (menu[e.currentTarget.dataset.menu]) return

    dispatch(openMenu(e.currentTarget.dataset.menu))
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(closeMenu())
  }

  return (
    <header className="shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 relative">
        <Link className="text-4xl font-semibold" to={user ? '/collections' : '/'}>FlashCards</Link>
        <ul className="flex">
          {user ? <>
            <li className="mr-4 self-center">
              <Button
                dropdown
                active={ menu.collections }
                data-menu="collections"
                onClick={ handleMenuButtonClick }
              >Collections</Button>
              <Menu open={ menu.collections } id="collections">
                <MenuItem to="/collections">
                  Library
                </MenuItem>
                <MenuItem to="/collections/create">
                  Create
                </MenuItem>
              </Menu>
            </li>
            <li>
              <Avatar
                data-menu="avatar"
                onClick={ handleMenuButtonClick }
              />
              <Menu open={ menu.avatar } id="avatar" className="right-0">
                <MenuItem to="/profile">
                  Profile
                </MenuItem>
                <MenuItemButton
                  onClick={handleLogout}
                >
                  Logout
                </MenuItemButton>
              </Menu>
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
