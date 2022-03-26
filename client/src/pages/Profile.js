import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Title from "../components/Title"
import usePrivate from "../hooks/usePrivate"

const Profile = () => {
  usePrivate()

  return (
    <section className="profile">
      <div className="profile__inner container">
        <Title>Profile</Title>

      </div>
    </section>
  )
}

export default Profile
