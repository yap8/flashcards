import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import useAuthRedirect from '../hooks/useAuthRedirect'

const Home = () => {
  useAuthRedirect('/collections')
  const { user } = useSelector(state => state.auth)

  return (
    <section className="home">
      <div className="home__inner container">
        <Title>Welcome</Title>
        <ul className="home__buttons">
          {user ? <>
            <li className="home__buttons-item">
              <Link className="home__link button button--small" to="/collections">
                Collections
              </Link>
            </li>
            <li className="home__buttons-item">
              <Link className="home__link button button--small" to="/collections/create">
                Create Collection
              </Link>
            </li>
          </> : <>
            <li className="home__buttons-item">
              <Link className="home__link button" to="/login">
                Login
              </Link>
            </li>
            <li className="home__buttons-item">
              <Link className="home__link button" to="/login">
                Register
              </Link>
            </li>
          </>}
        </ul>
      </div>
    </section>
  )
}

export default Home
