import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
  }, [success])

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

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

  return (
    <section className="collections">
      <div className="collections__inner container">
        <Title>Create Collection</Title>
        <form className="form form--large" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="text"
              className="form__field"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <h2 className="form__title">Cards</h2>
          </div>
          {formData.cards.map((card, index) => (
            <div className="form__group form__group--fields" key={index}>
              <input
                type="text"
                className="form__field"
                name={`${index}-front`}
                placeholder="Front"
                value={card.front}
                onChange={handleCardChange}
              />
              <input
                type="text"
                className="form__field"
                name={`${index}-back`}
                placeholder="Back"
                value={card.back}
                onChange={handleCardChange}
              />
            </div>
          ))}
          <div className="form__group">
            <button
              className="button"
              onClick={e => {
                e.preventDefault()

                addCard()
              }}
            >Add card</button>
          </div>
          <div className="form__group">
            <button className="button" type="submit">Create</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CollectionsForm
