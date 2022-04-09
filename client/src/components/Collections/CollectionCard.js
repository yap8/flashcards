import { Link } from 'react-router-dom'
import Button from '../Button'
import DeleteIcon from '../Icons/DeleteIcon'
import SettingsIcon from '../Icons/SettingsIcon'

const CollectionCard = ({ create, collection }) => {
  const classes = 'rounded overflow-hidden bg-white shadow-lg w-full md:w-1/4'

  const handleDelete = e => {
    e.preventDefault()
    
    console.log('delete')
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
        <div>
          <Button
            tag="Link"
            to={`${collection._id}/settings`}
          >
            <SettingsIcon />
          </Button>
          <Button
            onClick={handleDelete}
          >
            <DeleteIcon />
          </Button>
        </div>
      </Link>
    </li>
  )
}

export default CollectionCard
