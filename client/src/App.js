import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header';
import Pages from './pages/Pages';

function App() {
  const theme = useSelector(state => state.theme)

  return (
    <Router>
      <div className={theme}>
        <ToastContainer position="bottom-center" />
        <Header />
        <Pages />
      </div>
    </Router>
  );
}

export default App;
