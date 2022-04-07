import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Form from '../components/Form/Form'
import FormGroup from '../components/Form/FormGroup'
import FormInput from '../components/Form/FormInput'
import useAuthRedirect from '../hooks/useAuthRedirect'
import { login } from '../redux/actions/authActions'

const Login = () => {
  useAuthRedirect()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { error, loading, success, message } = useSelector(state => state.app)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = formData

    dispatch(login(email, password))

    setFormData({ ...formData, password: '' })
  }

  useEffect(() => {
    if (success) navigate('/collections')

    if (error && message) toast.error(message)
  }, [success, error, message])

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section className="">
      <div className="container mx-auto">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              label
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormInput
              label
              name="password"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <button
              className={'form__button button' + (loading ? ' button--disabled' : '')}
              disabled={loading}
            >Login</button>
          </FormGroup>
        </Form>
      </div>
    </section>
  )
}

export default Login
