import { Link } from 'react-router-dom'
import Button from '../Button'

const CollectionCard = ({ collection }) => {
  const handleClick = e => {
    e.stopPropagation()
    e.preventDefault()

    console.log('open_modal')
  }

  return (
    <li className="rounded overflow-hidden bg-white shadow-lg w-full md:w-1/4">
      <Link to={collection._id} className="flex flex-col py-5 px-4">
        <h2 className="font-bold text-2xl mb-2">
          {collection.title}
        </h2>
        <p className="text-gray-700 font-semibold mb-4">
          {collection.cards.length} items
        </p>
        <div className="flex justify-between">
          <Button
            onClick={handleClick}
          >...</Button>
        </div>
      </Link>
    </li>
  )
}

export default CollectionCard
