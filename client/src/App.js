import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header';
import Pages from './pages/Pages';

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-center" />
      <Header />
      <Pages />
    </Router>
  );
}

export default App;
