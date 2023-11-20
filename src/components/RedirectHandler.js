import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = localStorage.getItem('redirectPath');
    if (redirectPath) {
      navigate(redirectPath);
      localStorage.removeItem('redirectPath'); // Clear the stored path
    }
  }, [navigate]);

  return null; // This component does not render anything
};

export default RedirectHandler;
