import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Collections from './Collections/Collections';
import Login from './Login'
import Profile from './Profile';
import Register from './Register'
import Home from './Home';
import CollectionsForm from './Collections/CollectionsForm';
import Collection from './Collections/Collection';
import CollectionSettings from './Collections/CollectionSettings';

const Pages = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/create" element={<CollectionsForm />} />
        <Route path="/collections/:id/settings" element={<CollectionSettings />} />
        <Route path="/collections/:id" element={<Collection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
