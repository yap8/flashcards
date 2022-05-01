import mergeClasses from '../../helpers/mergeClasses';

const Card = ({ card, index, handleClick }) => {
  const classes = {
    base: 'w-full h-full bg-white relative shadow-lg rounded transition duration-200 pointer hover:bg-gray-50',
    dark: 'dark:bg-slate-800 dark:text-white dark:hover:bg-slate-900',
  };

  return (
    <li
      className="w-full h-60 mr-4 mb-4 md:w-80"
      style={{ perspective: '1000px' }}
    >
      <button
        className={mergeClasses(classes)}
        style={{
          transformStyle: 'preserve-3d',
          transform: card.flipped ? 'rotateY(180deg)' : '',
        }}
        onClick={() => handleClick(index)}
      >
        <div
          className="w-full h-full flex text-center overflow-hidden absolute top-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h3 className="text-2xl m-auto">{card.front}</h3>
        </div>
        <div
          className="w-full h-full flex text-center overflow-hidden absolute top-0"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-2xl m-auto">{card.back}</h3>
        </div>
      </button>
    </li>
  );
};

export default Card;
