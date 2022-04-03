import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/actions/authActions'
import useAuthRedirect from '../hooks/useAuthRedirect'
import { toast } from 'react-toastify'

const Register = () => {
  useAuthRedirect()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loading, error, success, message } = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()

    const { name, email, password } = formData

    dispatch(register(name, email, password))

    setFormData({ ...formData, password: '' })
  }
  
  useEffect(() => {
    if (success) navigate('/collections')

    if (error && message) toast.error(message)
  }, [success, error, message])

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section className='register'>
      <div className="register__inner container">
        <Title>Register</Title>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              disabled={loading}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              disabled={loading}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              disabled={loading}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <button
              className={'form__button button' + (loading ? ' button--disabled' : '')}
              disabled={loading}
            >Register</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register
