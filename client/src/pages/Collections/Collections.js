import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Title from "../../components/Title"
import usePrivate from "../../hooks/usePrivate"
import { fetchCollections } from "../../redux/actions/collectionsActions"
import CollectionsList from "../../components/Collections/CollectionsList"
import Spinner from "../../components/Spinner"

const Collections = () => {
  usePrivate()

  const { collections } = useSelector(state => state.collections)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollections())
  }, [dispatch])

  return (
    <section>
      <div className="container mx-auto pt-10">
        <Title>Collections</Title>
        { collections.length ? <CollectionsList collections={collections} /> : <Spinner /> }
      </div>
    </section>
  )
}

export default Collections
