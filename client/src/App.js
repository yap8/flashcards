import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Collections from './pages/Collections';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Register from './pages/Register'
import Logout from './pages/Logout'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
