import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

import CollectionSettings from './pages/Collections/CollectionSettings';
import CollectionsForm from './pages/Collections/CollectionsForm';
import Collections from './pages/Collections/Collections';
import Collection from './pages/Collections/Collection';
import Header from './components/Header';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div className="min-h-screen transition bg-gray-100 dark:bg-slate-700">
        <Router>
          <ToastContainer position="bottom-center" />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/create" element={<CollectionsForm />} />
            <Route
              path="/collections/:id/settings"
              element={<CollectionSettings />}
            />
            <Route path="/collections/:id" element={<Collection />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
