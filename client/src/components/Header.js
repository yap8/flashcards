import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Header = () => {
  const { authToken } = useSelector(state => state.user)

  return (
    <header className="header">
      <div className="header__inner container">
        <Link className="header__logo" to="/">FlashCards</Link>
        <ul className="header__nav">
          {authToken ? <>
            <li className="header__nav-item">
            <Link className="header__nav-link" to="/collections">Collections</Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/profile">Profile</Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/logout">Logout</Link>
            </li>
          </> : <>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/login">Login</Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/register">Register</Link>
            </li>
          </>}
        </ul>
      </div>
    </header>
  )
}

export default Header
