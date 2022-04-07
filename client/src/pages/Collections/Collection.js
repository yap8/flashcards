import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Title from '../../components/Title'
import usePrivate from '../../hooks/usePrivate'
import { flipCard } from '../../redux/actions/cardActions'
import { getCollection } from '../../redux/actions/collectionsActions'

const Collection = () => {
  usePrivate()

  const cards = useSelector(state => state.cards)
  const { title } = useSelector(state => state.collections.current)
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(getCollection(id))
  }, [])

  const handleClick = index => {
    console.log(index)
    dispatch(flipCard(index))
  }

  return (
    <section className="collection">
      <div className="collection__inner container">
        <Title className="collection__title title">{title}</Title>
        {cards ? (
          <ul className="collection__cards">
            {cards.map((card, index) => (
              <li className={'card' + (card.flipped ? ' card--flipped' : '')} key={card._id}>
                <button
                  className="card__inner"
                  onClick={() => handleClick(index)}
                >
                  <div className="card__front">
                    <h3 className="card__text">{card.front}</h3>
                  </div>
                  <div className="card__back">
                    <h3 className="card__text">{card.back}</h3>
                    back
                  </div>
                </button>
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
