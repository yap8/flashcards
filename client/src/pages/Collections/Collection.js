import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Title from '../../components/Title'
import usePrivate from '../../hooks/usePrivate'
import { getCollection } from '../../redux/actions/collectionsActions'

const Collection = () => {
  usePrivate()

  const { current } = useSelector(state => state.collections)
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(getCollection(id))
  }, [])

  return (
    <section className="collection">
      <div className="collection__inner container">
        <Title className="collection__title title">{current.title}</Title>
        {current.cards && current.cards.length ? (
          <ul className="collection__cards">
            {current.cards.map(card => (
              <li className="card" key={card._id}>
                <div className="card__inner">
                  <div className="card__front">
                    <h3 className="card__text">{card.front}</h3>
                  </div>
                  <div className="card__back">
                    <h3 className="card__text">{card.back}</h3>
                    back
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>no cards...</div>
        )}
      </div>
    </section>
  )
}

export default Collection
