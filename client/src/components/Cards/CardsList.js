import { useDispatch } from 'react-redux';
import { flipCard } from '../../redux/actions/collectionActions';
import Card from './Card';

const CardsList = ({ cards }) => {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(flipCard(index));
  };

  return (
    <ul className="flex flex-wrap flex-col md:flex-row">
      {cards.map((card, index) => (
        <Card
          key={card._id}
          card={card}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};

export default CardsList;
