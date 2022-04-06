import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import usePrivate from "../hooks/usePrivate"
import { editProfileData, getProfileData } from "../redux/actions/profileActions"

import Title from "../components/Title"

const Profile = () => {
  usePrivate()

  const dispatch = useDispatch()

  const { error, success, loading, message } = useSelector(state => state.app)
  const { name, email } = useSelector(state => state.profile)

  const [formData, setFormData] = useState({
    name,
    email,
    password: '',
    passwordRepeat: ''
  })

  useEffect(() => {
    dispatch(getProfileData())
  }, [])

  useEffect(() => {
    setFormData({
      ...formData,
      name,
      email
    })
  }, [name, email])

  useEffect(() => {
    if (success && message) toast.success(message)

    if (error && message) toast.error(message)
  }, [success, error, message])

  const handleSubmit = e => {
    e.preventDefault()

    const { name, email, password, passwordRepeat } = formData

    dispatch(editProfileData(name, email, password, passwordRepeat))

    setFormData({
      ...formData,
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
