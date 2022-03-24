import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    try {
      e.preventDefault()
  
      const { email, password } = formData
  
      setLoading(true)

      const { data } = await axios.post('/api/users/login', {
        email,
        password
      })

      setLoading(false)

      localStorage.setItem('authToken', data.token)

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
              className={'form__button' + (loading ? ' form__button--disabled' : '')}
              disabled={loading}
            >Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
