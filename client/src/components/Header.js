import { useDispatch, useSelector } from "react-redux"

import { Link } from "react-router-dom"
import Avatar from "./Avatar"
import Button from "./Button"
import Menu from "./Menu/Menu"
import MenuItem from "./Menu/MenuItem"

import { closeMenu, openMenu } from "../redux/actions/menuActions"
import { logout } from "../redux/actions/authActions"
import MenuItemButton from "./Menu/MenuItemButton"
import { useEffect, useState } from "react"

const Header = () => {
  const { user } = useSelector(state => state.auth)
  const menu = useSelector(state => state.menu)

  const [collectionsMenu, setCollectionsMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleCollectionsMenuClick = () => {
    if (collectionsMenu) {
      dispatch(closeMenu())
    } else {
      setProfileMenu(false)
      setCollectionsMenu(true)
      dispatch(openMenu())
    }
  }
  
  const handleProfileMenuClick = () => {
    if (profileMenu) {
      dispatch(closeMenu())
    } else {
      setCollectionsMenu(false)
      setProfileMenu(true)
      dispatch(openMenu())
    }
  }

  useEffect(() => {
    if (!menu) {
      setCollectionsMenu(false)
      setProfileMenu(false)
    }
  }, [menu])

  return (
    <header className="shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 relative">
        <Link className="text-2xl md:text-4xl font-semibold" to={user ? '/collections' : '/'}>FlashCards</Link>
        <ul className="flex items-center">
          {user ? <>
            <li className="mr-2 md:mr-4 self-center">
              <Button
                dropdown
                data-menu="true"
                onClick={handleCollectionsMenuClick}
              >Collections</Button>
              <Menu open={collectionsMenu}>
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
                data-menu="true"
                onClick={handleProfileMenuClick}
              />
              <Menu open={profileMenu} className="right-4">
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
            <li className="mr-2 md:mr-4">
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
