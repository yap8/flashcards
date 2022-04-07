import { useDispatch, useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import { logout } from "../redux/actions/authActions"

const Header = () => {
  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  return (
    <header className="header">
      <div className="header__inner container">
        <Link className="header__logo" to="/">FlashCards</Link>
        <ul className="header__nav">
          {user ? <>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to="/collections">Collections</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="header__nav-item">
              <button
                className="header__nav-link"
                onClick={() => dispatch(logout())}
              >Logout</button>
            </li>
          </> : <>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to="/login">Login</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to="/register">Register</NavLink>
            </li>
          </>}
        </ul>
      </div>
    </header>
  )
}

export default Header
