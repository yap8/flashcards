import api from "../http/index"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Title from "../components/Title"
import usePrivate from "../hooks/usePrivate"
import { Link } from "react-router-dom"

const Collections = () => {
  usePrivate()

  // const { user } = useSelector(state => state.auth)

  // // const [collections, setCollections] = useState([])

  // // useEffect(() => {
  // //   const fetchCollections = async () => {
  // //     try {
  // //       const { data } = await api.get('/api/collections')

  // //       setCollections(data)
  // //     } catch (error) {
  // //       alert(error.response.data.error)
  // //     }
  // //   }
    
  // //   fetchCollections()
  // // }, [user])

  const collections = [
    { id: '1', title: 'title 1' },
    { id: '2', title: 'title 2' },
    { id: '3', title: 'title 3' },
    { id: '4', title: 'title 4' },
    { id: '5', title: 'title 5' },
    { id: '6', title: 'title 6' }
  ]

  return (
    <section className="collections">
      <div className="collections__inner container">
        <Title>Collections</Title>
        {collections.length ? (
          <ul className="collections__list">
            {collections.map(collection => (
              <li className="collections__item">
                <Link to={collection.id} className="collections__item-inner">
                  <h2 className="collections__item-title">{collection.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        ) : <Title>No collections</Title>}
        <Link className="button button--small" to="/collections/create">Create Collection</Link>
      </div>
    </section>
  )
}

export default Collections
