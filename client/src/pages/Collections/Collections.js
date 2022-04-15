import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import usePrivate from "../../hooks/usePrivate"
import { fetchCollections } from "../../redux/actions/collectionsActions"
import { motion } from 'framer-motion'

import Title from "../../components/Title"
import CollectionsList from "../../components/Collections/CollectionsList"

const Collections = () => {
  usePrivate()

  const { collections } = useSelector(state => state.collections)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollections())
  }, [dispatch])

  return (
    <motion.section
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: {
          duration: .2
        }
      }}
    >
      <div className="container mx-auto pt-6 md:pt-10">
        <Title>Collections</Title>
        <CollectionsList collections={collections} />
      </div>
    </motion.section>
  )
}

export default Collections
