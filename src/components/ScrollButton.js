import React, { useState, useEffect } from 'react';
import { ReactComponent as NiceButton} from '../assets/scoll-button.svg'
import { Button } from '../styles/ScrollButton';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const pageScroll = 500;

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > pageScroll) {
      setVisible(true);
    } else if (scrolled <= pageScroll) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <Button onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
      <NiceButton width="25" height="25" />
    </Button>
  );
};

export default ScrollButton;
