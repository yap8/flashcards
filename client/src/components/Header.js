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
              <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div>
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
