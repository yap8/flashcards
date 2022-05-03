import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import mergeClasses from '../../helpers/mergeClasses';
import { deleteCollection } from '../../redux/actions/collectionsActions';
import DeleteIcon from '../Icons/DeleteIcon';
import SettingsIcon from '../Icons/SettingsIcon';

const CollectionCard = ({ create, collection }) => {
  const classes = {
    base: 'w-full h-full block py-5 px-4 bg-white relative shadow-lg rounded transition duration-200 pointer hover:bg-gray-50',
    dark: 'dark:bg-slate-800 dark:text-white dark:hover:bg-slate-900',
  };

  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();

    dispatch(deleteCollection(id));
  };

  if (create)
    return (
      <li className={'w-full mb-4 mr-4 md:w-72'}>
        <Link to="/collections/create" className={mergeClasses(classes)}>
          <h2 className="font-bold text-2xl">Create new collection</h2>
        </Link>
      </li>
    );

  return (
    <li
      className={'w-full rounded overflow-hidden shadow-lg mb-4 mr-4 md:w-72'}
    >
      <Link to={collection._id} className={mergeClasses(classes)}>
        <h2 className="font-bold text-2xl mb-2">{collection.title}</h2>
        <p className="text-gray-700 font-semibold mb-4 dark:text-gray-300">
          {collection.cards.length}{' '}
          {collection.cards.length === 1 ? 'item' : 'items'}
        </p>
        <div className="flex">
          <Link
            className="text-gray-500 hover:text-gray-900 transition mr-2 dark:text-blue-400 dark:hover:text-blue-500"
            to={`${collection._id}/settings`}
          >
            <SettingsIcon />
          </Link>
          <button
            className="text-gray-500 hover:text-gray-900 transition dark:text-blue-400 dark:hover:text-blue-500"
            onClick={(e) => handleDelete(e, collection._id)}
          >
            <DeleteIcon />
          </button>
        </div>
      </Link>
    </li>
  );
};

export default CollectionCard;
