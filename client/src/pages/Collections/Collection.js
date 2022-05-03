import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { getCollection } from '../../redux/actions/collectionActions';
import CardsList from '../../components/Cards/CardsList';
import usePrivate from '../../hooks/usePrivate';
import Spinner from '../../components/Spinner';
import Title from '../../components/Title';

const Collection = () => {
  usePrivate();

  const dispatch = useDispatch();
  const { id } = useParams();

  const collection = useSelector((state) => state.collection);

  useEffect(() => {
    dispatch(getCollection(id));
  }, [id, dispatch]);

  return (
    <section>
      <div className="container mx-auto pt-6 md:pt-10">
        <Title>{collection && collection.title}</Title>
        {collection && collection.cards ? (
          <CardsList cards={collection.cards} />
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  );
};

export default Collection;
