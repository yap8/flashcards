import api from "../http/index"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Title from "../components/Title"
import usePrivate from "../hooks/usePrivate"

const Collections = () => {
  usePrivate()

  const { user } = useSelector(state => state.auth)

  const [collections, setCollections] = useState([])

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const { data } = await api.get('/api/collections')

        setCollections(data)
      } catch (error) {
        alert(error.response.data.error)
      }
    }
    
    fetchCollections()
  }, [user])

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
