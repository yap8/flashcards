import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Title from "../components/Title"

const Collections = () => {
  const { authToken } = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) navigate('/login')
  }, [authToken])

  return (
    <section className="collections">
      <div className="collections__inner container">
        <Title>Collections</Title>
      </div>
    </section>
  )
}

export default Collections
