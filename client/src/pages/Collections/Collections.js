import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Title from "../../components/Title"
import usePrivate from "../../hooks/usePrivate"
import { Link } from "react-router-dom"
import { fetchCollections } from "../../redux/actions/collectionsActions"

const Collections = () => {
  usePrivate()

  const { collections } = useSelector(state => state.collections)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollections())
  }, [dispatch])

  return (
    <section className="collections">
      <div className="collections__inner container">
        <Title>Collections</Title>
        {collections.length ? (
          <ul className="collections__list">
            {collections.map(collection => (
              <li className="collections__item">
                <Link to={collection._id} className="collections__item-inner">
                  <h2 className="collections__item-title">{collection.title}</h2>
                  <p className="collections__item-text">
                    <b>Author: </b>{collection.author}
                  </p>
                  <p className="collections__item-text">
                    <b>Number of cards: </b>{collection.cards.length}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : <div>No collections</div>}
        <Link className="button button--small" to="/collections/create">Create Collection</Link>
      </div>
    </section>
  )
}

export default Collections
