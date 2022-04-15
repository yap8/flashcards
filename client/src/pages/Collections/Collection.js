import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import usePrivate from '../../hooks/usePrivate'
import { getCollection } from '../../redux/actions/collectionsActions'
import { motion } from 'framer-motion'

import Title from '../../components/Title'
import CardsList from '../../components/Cards/CardsList'
import Spinner from '../../components/Spinner'


const Collection = () => {
  usePrivate()

  const dispatch = useDispatch()
  const { id } = useParams()

  const { title, cards } = useSelector(state => state.collections.current)

  useEffect(() => {
    dispatch(getCollection(id))
  }, [id, dispatch])

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
        <Title>{ title }</Title>
        { (cards && cards.length) ? <CardsList /> : <Spinner /> }
      </div>
    </motion.section>
  )
}

export default Collection
