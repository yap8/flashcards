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
      document.body.classList.remove('bg-gray-100')
      document.body.classList.add('bg-slate-700')
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.remove('bg-slate-700')
      document.body.classList.add('bg-gray-100')
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
