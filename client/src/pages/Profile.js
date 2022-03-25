import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Title from "../components/Title"

const Profile = () => {
  const navigate = useNavigate()
  const { authToken } = useSelector(state => state.user)

  useEffect(() => {
    if (!authToken) navigate('/login')
  }, [authToken, navigate])

  return (
    <section className="profile">
      <div className="profile__inner container">
        <Title>Profile</Title>

      </div>
    </section>
  )
}

export default Profile
