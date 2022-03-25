import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Title from "../components/Title"

const Collections = () => {
  const { authToken } = useSelector(state => state.user)
  const navigate = useNavigate()

  const [collections, setCollections] = useState([])

  useEffect(() => {
    if (!authToken) navigate('/login')
  }, [authToken, navigate])

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const { data } = await axios.get('/api/collections', {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })

        setCollections(data)
      } catch (error) {
        alert(error.response.data.error)
      }
    }
    
    fetchCollections()
  }, [authToken])

  return (
    <section className="collections">
      <div className="collections__inner container">
        {collections.length ? (
          <ul className="collections__list">
            {collections.map(collection => (
              <li className="collections__item">
                <h2 className="collections__item-title">{collection.title}</h2>
              </li>
            ))}
          </ul>
        ) : <Title>No collections</Title>}
      </div>
    </section>
  )
}

export default Collections
