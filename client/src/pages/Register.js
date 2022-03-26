import { useEffect, useState } from 'react'
import api from '../http/index'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import { useDispatch } from 'react-redux'
import { storeToken } from '../redux/actions/userActions'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      navigate('/')
    }
  }, [navigate])

  const handleSubmit = async e => {
    try {
      e.preventDefault()
  
      const { name, email, password } = formData
  
      setLoading(true)

      const { data } = await api.post('/api/users/register', {
        name,
        email,
        password
      })

      setLoading(false)

      dispatch(storeToken(data.token))

      navigate('/')
    } catch (error) {
      alert(error.response.data.error)

      setTimeout(() => {
        setLoading(false)
      }, 600);
    }
  }

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
