import { useDispatch, useSelector } from 'react-redux'
import { flipCard } from '../../redux/actions/cardActions'
import Card from './Card'

const CardsList = () => {
  const cards = useSelector(state => state.cards)
  const dispatch = useDispatch()

  const handleClick = index => {
    dispatch(flipCard(index))
  }

  return (
    <ul className="flex flex-wrap gap-8">
      { cards.map((card, index) => <Card key={card._id} card={card} index={index} handleClick={handleClick} />) }
    </ul>
  )
}

export default CardsList
