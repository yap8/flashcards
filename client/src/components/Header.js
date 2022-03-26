import { useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  const { authToken } = useSelector(state => state.user)

  return (
    <header className="header">
      <div className="header__inner container">
        <Link className="header__logo" to={authToken ? '/collections' : '/'}>FlashCards</Link>
        <ul className="header__nav">
          {authToken ? <>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to="/collections">Collections</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to="/logout">Logout</NavLink>
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
