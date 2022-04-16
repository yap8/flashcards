import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header';
import Pages from './pages/Pages';

function App() {
  const theme = useSelector(state => state.theme)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <Router>
      <ToastContainer position="bottom-center" />
      <Header />
      <Pages />
    </Router>
  );
}

export default App;
