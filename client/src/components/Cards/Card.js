import mergeClasses from '../../helpers/mergeClasses';

const Card = ({ card, index, handleClick }) => {
  const innerClasses = {
    base: 'w-full h-full relative transition duration-200 pointer preserve-3d group',
    flipped: card.flipped ? 'rotate-y-180' : '',
  };

  const sideClasses = {
    base: 'bg-white shadow rounded w-full h-full flex text-center overflow-hidden absolute top-0 backface-invisible transition group-hover:bg-gray-50',
    dark: 'dark:bg-slate-800 dark:text-white dark:group-hover:bg-slate-900',
  };

  return (
    <li className="w-full h-60 mr-4 mb-4 md:w-80 perspective-1000">
      <button
        className={mergeClasses(innerClasses)}
        onClick={() => handleClick(index)}
      >
        <div className={mergeClasses(sideClasses)}>
          <h3 className="text-2xl m-auto">{card.front}</h3>
        </div>
        <div className={mergeClasses(sideClasses) + ' rotate-y-180'}>
          <h3 className="text-2xl m-auto">{card.back}</h3>
        </div>
      </button>
    </li>
  );
};

export default Card;
