import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useAuthRedirect = (path = '/') => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate(path);
    }
  }, [path, navigate]);
};

export default useAuthRedirect;
