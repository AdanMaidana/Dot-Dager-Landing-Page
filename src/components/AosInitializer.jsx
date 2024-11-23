import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150,
      once: true,
    });
  }, []);

  return null; // Este componente no necesita renderizar nada
};

export default AOSInitializer;
