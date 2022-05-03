import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import {
  resetCollection,
  getCollection,
} from '../../redux/actions/collectionActions';
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

    return () => {
      dispatch(resetCollection());
    };
  }, [id, dispatch]);

  return (
    <section>
      <div className="container mx-auto pt-6 md:pt-10">
        {collection ? (
          <>
            <Title>{collection.title}</Title>
            {collection.cards.length ? (
              <CardsList cards={collection.cards} />
            ) : (
              <div className="text-xl dark:text-white">
                No cards yet{' '}
                <Link
                  className="text-blue-500 underline hover:no-underline"
                  to={`/collections/${collection._id}/settings`}
                >
                  click here to add cards
                </Link>
              </div>
            )}
          </>
        ) : (
          <Spinner className="m-auto" />
        )}
      </div>
    </section>
  );
};

export default Collection;
