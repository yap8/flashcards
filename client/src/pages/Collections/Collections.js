import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import CollectionsList from '../../components/Collections/CollectionsList';
import { fetchCollections } from '../../redux/actions/collectionsActions';
import usePrivate from '../../hooks/usePrivate';
import Title from '../../components/Title';

const Collections = () => {
  usePrivate();

  const { collections } = useSelector((state) => state.collections);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <section>
      <div className="container mx-auto pt-6 md:pt-10">
        <Title>Collections</Title>
        <CollectionsList collections={collections} />
      </div>
    </section>
  );
};

export default Collections;
