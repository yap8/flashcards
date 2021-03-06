import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { editCollection } from '../../redux/actions/collectionsActions';
import {
  getCollection,
  resetCollection,
} from '../../redux/actions/collectionActions';
import FormGroup from '../../components/Form/FormGroup';
import FormInput from '../../components/Form/FormInput';
import usePrivate from '../../hooks/usePrivate';
import Form from '../../components/Form/Form';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';

const CollectionSettings = () => {
  usePrivate();

  const collection = useSelector((state) => state.collection);
  const { success } = useSelector((state) => state.request);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    cards: [{ front: '', back: '' }],
  });

  const addCard = () => {
    setFormData({
      ...formData,
      cards: [...formData.cards, { front: '', back: '' }],
    });
  };

  useEffect(() => {
    dispatch(getCollection(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (collection) {
      setFormData({
        title: collection.title,
        cards: [...collection.cards, { front: '', back: '' }],
      });
    }
  }, [collection]);

  useEffect(() => {
    if (success) navigate('/collections');
  }, [success, navigate]);

  useEffect(() => {
    return () => {
      dispatch(resetCollection());
    };
  }, [dispatch]);

  const handleCardChange = (e) => {
    const [index, side] = e.target.name.split('-');

    const cardsCopy = JSON.parse(JSON.stringify(formData.cards));

    cardsCopy[index] = {
      ...cardsCopy[index],
      [side]: e.target.value,
    };

    setFormData({
      ...formData,
      cards: cardsCopy,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredCards = formData.cards.filter(
      (card) => card.front.trim() || card.back.trim()
    );

    const item = {
      ...formData,
      cards: filteredCards,
    };

    dispatch(editCollection(id, item));
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddClick = (e) => {
    e.preventDefault();

    addCard();
  };

  return (
    <section>
      <div className="container mx-auto pt-6 md:pt-10">
        <Title className="md:text-center">Edit Collection</Title>
        {collection ? (
          <Form onSubmit={handleSubmit} className="max-w-xl">
            <FormGroup>
              <FormInput
                label
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormGroup>
            {formData.cards.map((card, index) => (
              <FormGroup key={index}>
                <FormInput
                  label={`Card ${index + 1}`}
                  name={`${index}-front`}
                  placeholder="Front"
                  value={card.front}
                  onChange={handleCardChange}
                  className="mb-2"
                />
                <FormInput
                  name={`${index}-back`}
                  placeholder="Back"
                  value={card.back}
                  onChange={handleCardChange}
                />
              </FormGroup>
            ))}
            <FormGroup>
              <Button
                className="w-full font-bold border dark:border-slate-700"
                onClick={handleAddClick}
              >
                +
              </Button>
            </FormGroup>
            <FormGroup>
              <Button color="blue">Edit</Button>
            </FormGroup>
          </Form>
        ) : (
          <Spinner className="m-auto" />
        )}
      </div>
    </section>
  );
};

export default CollectionSettings;
