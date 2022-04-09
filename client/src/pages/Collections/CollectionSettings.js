import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getCollection } from '../../redux/actions/collectionsActions'
import Button from '../../components/Button'
import Form from '../../components/Form/Form'
import FormGroup from '../../components/Form/FormGroup'
import FormInput from '../../components/Form/FormInput'
import Title from '../../components/Title'
import useAlert from '../../hooks/useAlert'
import usePrivate from '../../hooks/usePrivate'
import { editCollection } from '../../redux/actions/collectionsActions'

const CollectionSettings = () => {
  usePrivate()
  useAlert()

  const { id } = useParams()
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { success, error, message } = useSelector(state => state.app)
  const { title, cards } = useSelector(state => state.collections.current)

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

    if (error && message) toast.error(message)
  }, [navigate, success])

  useEffect(() => {
    dispatch(getCollection(id))
  }, [id, dispatch])

  useEffect(() => {
    setFormData({
      ...formData,
      title: title || '',
      cards: cards || []
    })
  }, [title, cards])

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

    dispatch(editCollection(id, formData))
  }

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleAddClick = e => {
    e.preventDefault()

    addCard()
  }

  return (
    <section>
      <div className="container mx-auto pt-10">
        <Title className="text-center">Edit Collection</Title>
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
              <FormGroup>
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
              >Edit</Button>
            </FormGroup>
        </Form>
      </div>
    </section>
  )
}

export default CollectionSettings
