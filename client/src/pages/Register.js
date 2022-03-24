import { useState } from 'react'
import Title from '../components/Title'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <section className='register'>
      <div className="register__inner container">
        <Title>Register</Title>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              className="form__field"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="form__group">
            <input
              className="form__field"
              type="email"
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
            <button className="form__button">Register</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register
