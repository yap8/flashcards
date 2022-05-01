import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Pages from './pages/Pages';

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div className="min-h-screen transition bg-gray-100 dark:bg-slate-700">
        <Router>
          <ToastContainer position="bottom-center" />
          <Header />
          <Pages />
        </Router>
      </div>
    </div>
  );
}

export default App;
