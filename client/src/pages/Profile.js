import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Title from "../components/Title"
import usePrivate from "../hooks/usePrivate"
import { editUser, getUser, setUser } from "../redux/actions/userActions"

const Profile = () => {
  usePrivate()

  const dispatch = useDispatch()

  const { name, email, error, loading } = useSelector(state => state.user)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  })

  useEffect(() => {
    dispatch(getUser())

    setFormData({
      ...formData,
      name,
      email
    })
  }, [dispatch, name, email])

  const handleSubmit = e => {
    e.preventDefault()

    if (formData.password !== formData.passwordRepeat) {
      alert('Passwords don\'t match')

      setFormData({
        ...formData,
        password: '',
        passwordRepeat: ''
      })
    }

    const { name, email, password } = formData

    dispatch(editUser(name, email, password))

    setFormData({
      password: '',
      passwordRepeat: ''
    })
  }

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section className="profile">
      <div className="profile__inner container">
        <Title>Profile</Title>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label
              className="form__label"
              htmlFor="name"
            >Name:</label>
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="text"
              name="name"
              id="name"
              disabled={loading}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label
              className="form__label"
              htmlFor="email"
            >Email:</label>
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="email"
              name="email"
              id="email"
              disabled={loading}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label
              className="form__label"
              htmlFor="password"
            >Password:</label>
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="password"
              name="password"
              id="password"
              disabled={loading}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label
              className="form__label"
              htmlFor="password-repeat"
            >Repeat password:</label>
            <input
              className={"form__field" + (loading ? ' form__field--disabled' : '')}
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              disabled={loading}
              value={formData.passwordRepeat}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <button
              className={'form__button button' + (loading ? ' button--disabled' : '')}
              disabled={loading}
              type="submit"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Profile
