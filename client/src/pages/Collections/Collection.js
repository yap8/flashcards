import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Title from '../../components/Title'
import usePrivate from '../../hooks/usePrivate'
import { getCollection } from '../../redux/actions/collectionsActions'
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
    <section>
      <div className="container mx-auto pt-10">
        <Title>{ title }</Title>
        { (cards && cards.length) ? <CardsList /> : <Spinner /> }
      </div>
    </section>
  )
}

export default Collection
