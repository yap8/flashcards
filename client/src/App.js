import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header';
import Collections from './pages/Collections/Collections';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Register from './pages/Register'
import Home from './pages/Home';
import CollectionsForm from './pages/Collections/CollectionsForm';
import Collection from './pages/Collections/Collection';
import CollectionSettings from './pages/Collections/CollectionSettings';

function App() {
  return (
    <Router>
      <ToastContainer
        position="bottom-center"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/create" element={<CollectionsForm />} />
        <Route path="/collections/:id/settings" element={<CollectionSettings />} />
        <Route path="/collections/:id" element={<Collection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
