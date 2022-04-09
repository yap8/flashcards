import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCollection } from '../../redux/actions/collectionsActions'
import DeleteIcon from '../Icons/DeleteIcon'
import SettingsIcon from '../Icons/SettingsIcon'

const CollectionCard = ({ create, collection }) => {
  const dispatch = useDispatch()

  const classes = 'rounded overflow-hidden bg-white shadow-lg w-full md:w-1/4'

  const handleDelete = (e, id) => {
    e.preventDefault()

    dispatch(deleteCollection(id))
  }

  if (create) return (
    <li className={classes}>
      <Link to="/collections/create" className="block h-full py-5 px-4">
        <h2 className="font-bold text-2xl">
          Create new collection
        </h2>
      </Link>
    </li>
  )

  return (
    <li className={classes}>
      <Link to={collection._id} className="flex flex-col py-5 px-4">
        <h2 className="font-bold text-2xl mb-2">
          {collection.title}
        </h2>
        <p className="text-gray-700 font-semibold mb-4">
          {collection.cards.length} items
        </p>
        <div className="flex">
          <Link
            className="text-gray-500 hover:text-gray-900 transition"
            to={`${collection._id}/settings`}
          >
            <SettingsIcon />
          </Link>
          <button
            className="text-gray-500 hover:text-gray-900 transition ml-2"
            onClick={(e) => handleDelete(e, collection._id)}
          >
            <DeleteIcon />
          </button>
        </div>
      </Link>
    </li>
  )
}

export default CollectionCard
