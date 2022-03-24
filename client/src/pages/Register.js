import { useState } from 'react'
import Title from '../components/Title'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    try {
      e.preventDefault()
  
      const { name, email, password } = formData
  
      setLoading(true)

      await axios.post('/api/users/register', {
        name,
        email,
        password
      })

      setLoading(false)
    } catch (error) {
      alert(error.message)
    }
  }

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
              onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="form__group">
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              disabled={loading}
              onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
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
              onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="form__group">
            <button
              className={'form__button' + (loading ? ' form__button--disabled' : '')}
              disabled={loading}
            >Register</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register
