import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Form from '../../components/Form/Form'
import FormGroup from '../../components/Form/FormGroup'
import FormInput from '../../components/Form/FormInput'
import Title from '../../components/Title'
import useAlert from '../../hooks/useAlert'
import usePrivate from '../../hooks/usePrivate'
import { createCollection } from '../../redux/actions/collectionsActions'

const CollectionsForm = () => {
  usePrivate()
  useAlert()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { success } = useSelector(state => state.app)

  const [formData, setFormData] = useState({
    title: '',
    cards: [
      { front: '', back: '' },
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

    dispatch(createCollection(title, cards))
  }

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleAddClick = e => {
    e.preventDefault()

    addCard()
  }

  return (
    <section>
      <div className="container mx-auto pt-10">
        <Title center>Create Collection</Title>
        <Form>
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
              <Button onClick={ handleAddClick }>Add Card</Button>
              <Button type="submit">Create</Button>
            </FormGroup>
        </Form>
      </div>
    </section>
  )
}

export default CollectionsForm
