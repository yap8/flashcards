import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Collections from './pages/Collections';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Register from './pages/Register'
import Logout from './pages/Logout'
import PrivateRoute from './components/routing/PrivateRoute'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route element={<Collections />} />
        </Route>
        <Route path="/collections" element={<PrivateRoute />}>
          <Route element={<Collections />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
