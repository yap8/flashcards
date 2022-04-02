import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import useAuthRedirect from '../hooks/useAuthRedirect'
import { login } from '../redux/actions/userActions'

const Login = () => {
  useAuthRedirect()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { error, loading } = useSelector(state => state.user)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = formData

    await dispatch(login(email, password))

    if (!error) navigate('/collections')
  }

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section className="login">
      <div className="login__inner container">
        <Title>Login</Title>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="text"
              placeholder="Email"
              name="email"
              disabled={loading}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="password"
              placeholder="Password"
              name="password"
              disabled={loading}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <button
              className={'form__button button' + (loading ? ' button--disabled' : '')}
              disabled={loading}
            >Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
