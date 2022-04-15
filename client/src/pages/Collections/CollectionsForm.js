import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import usePrivate from '../../hooks/usePrivate'
import { createCollection } from '../../redux/actions/collectionsActions'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import Button from '../../components/Button'
import Form from '../../components/Form/Form'
import FormGroup from '../../components/Form/FormGroup'
import FormInput from '../../components/Form/FormInput'
import Title from '../../components/Title'

const CollectionsForm = () => {
  usePrivate()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { success } = useSelector(state => state.app)

  const [formData, setFormData] = useState({
    title: '',
    cards: [
      { front: '', back: '' },
      { front: '', back: '' }
    ]
  })

  const addCard = () => {
    setFormData({
      ...formData,
      cards: [
        ...formData.cards,
        { front: '', back: '' }
      ]
    })
  }

  useEffect(() => {
    if (success) navigate('/collections')
  }, [navigate, success])

  const handleCardChange = e => {
    const [index, side] = e.target.name.split('-')

    const cardsCopy = JSON.parse(JSON.stringify(formData.cards))

    cardsCopy[index] = {
      ...cardsCopy[index],
      [side]: e.target.value
    }

    setFormData({
      ...formData,
      cards: cardsCopy
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { title, cards } = formData

    const filteredCards = cards.filter(card => card.front.trim() || card.back.trim())

    dispatch(createCollection(title, filteredCards))
  }

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleAddClick = e => {
    e.preventDefault()

    addCard()
  }

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
        <Title className="md:text-center">Create Collection</Title>
        <Form onSubmit={ handleSubmit } className="max-w-xl">
          <FormGroup>
            <FormInput
              label
              name="title"
              value={ formData.title }
              onChange={ handleChange }
            />
          </FormGroup>
            {formData.cards.map((card, index) => (
              <FormGroup key={index}>
                <FormInput
                  label={ `Card ${index + 1}` }
                  name={ `${index}-front` }
                  placeholder="Front"
                  value={ card.front }
                  onChange={ handleCardChange }
                  className="mb-2"
                />
                <FormInput
                  name={ `${index}-back` }
                  placeholder="Back"
                  value={ card.back }
                  onChange={ handleCardChange }
                />
              </FormGroup>
            ))}
            <FormGroup>
              <Button
                className="w-full font-bold border"
                onClick={ handleAddClick }
              >+</Button>
            </FormGroup>
            <FormGroup>
              <Button
                blue
              >Create</Button>
            </FormGroup>
        </Form>
      </div>
    </motion.section>
  )
}

export default CollectionsForm
