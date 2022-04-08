import CollectionCard from "./CollectionCard"

const CollectionsList = ({ collections }) => {
  return (
    <ul className="flex flex-wrap gap-8">
      {collections.map(collection => <CollectionCard key={collection._id} collection={collection} />)}
    </ul>
  )
}

export default CollectionsList
