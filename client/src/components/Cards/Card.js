import mergeClasses from '../../helpers/mergeClasses';

const Card = ({ card, index, handleClick }) => {
  const classes = {
    base: 'w-full h-full bg-white relative shadow rounded transition duration-200 pointer preserve-3d',
    hover: 'hover:bg-gray-50',
    dark: 'dark:bg-slate-800 dark:text-white dark:hover:bg-slate-900',
    flipped: card.flipped ? 'rotate-y-180' : '',
  };

  return (
    <li className="w-full h-60 mr-4 mb-4 md:w-80 perspective-1000">
      <button
        className={mergeClasses(classes)}
        onClick={() => handleClick(index)}
      >
        <div className="w-full h-full flex text-center overflow-hidden absolute top-0 backface-invisible">
          <h3 className="text-2xl m-auto">{card.front}</h3>
        </div>
        <div className="w-full h-full flex text-center overflow-hidden absolute top-0 backface-invisible rotate-y-180">
          <h3 className="text-2xl m-auto">{card.back}</h3>
        </div>
      </button>
    </li>
  );
};

export default Card;
