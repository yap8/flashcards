import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Title from "../../components/Title"
import usePrivate from "../../hooks/usePrivate"
import { Link } from "react-router-dom"
import { fetchCollections } from "../../redux/actions/collectionsActions"
import CollectionsList from "./CollectionsList"
import Button from "../../components/Button"

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
        { collections.length && <CollectionsList collections={collections} /> }
      </div>
    </section>
  )
}

export default Collections
