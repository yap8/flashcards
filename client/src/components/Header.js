import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { useDispatch, useSelector } from 'react-redux';
import '@szhsin/react-menu/dist/transitions/slide.css';
import '@szhsin/react-menu/dist/index.css';
import { Link } from 'react-router-dom';

import { changeTheme } from '../redux/actions/themeActions';
import { logout } from '../redux/actions/authActions';
import SunIcon from './Icons/SunIcon';
import MoonIcon from './Icons/MoonIcon';
import Avatar from './Avatar';
import Button from './Button';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const handleThemeChange = () =>
    dispatch(changeTheme(theme === 'dark' ? null : 'dark'));

  return (
    <header className="shadow-md bg-white dark:bg-slate-800">
      <div className="container mx-auto flex justify-between items-center py-2 md:py-4 relative">
        <Link
          className="text-2xl md:text-4xl font-semibold dark:text-white"
          to={user ? '/collections' : '/'}
        >
          FlashCards
        </Link>
        <ul className="flex items-center">
          <li className="mr-2 md:mr-4 flex">
            <button onClick={handleThemeChange}>
              {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </button>
          </li>
          {user ? (
            <>
              <li className="mr-2 md:mr-4 self-center">
                <Menu
                  transition
                  menuButton={
                    <MenuButton>
                      <Button dropdown={true}>Collections</Button>
                    </MenuButton>
                  }
                >
                  <MenuItem>
                    <Link to="/collections">Library</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/collections/create">Create</Link>
                  </MenuItem>
                </Menu>
              </li>
              <li>
                <Menu
                  menuButton={
                    <MenuButton>
                      <Avatar />
                    </MenuButton>
                  }
                >
                  <MenuItem>
                    <Link to="/profile">Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </li>
            </>
          ) : (
            <>
              <li className="mr-2 md:mr-4">
                <Button tag="NavLink" to="/login">
                  Login
                </Button>
              </li>
              <li>
                <Button blue tag="NavLink" to="/register">
                  Register
                </Button>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
