import { useState } from 'react'
import Title from '../components/Title'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()


  }

  return (
    <section className="login">
      <div className="login__inner container">
        <Title>Login</Title>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              className="form__field"
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="form__group">
            <input
              className="form__field"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="form__group">
            <button className="form__button">Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
