import React, { useState, useEffect } from 'react';
import { ReactComponent as NiceButton } from '../assets/scoll-button.svg'
import { Button } from '../styles/ScrollButton';
import Fade from "react-reveal/Fade";

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
    <Button onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} title="Go to Top">
      <Fade duration={500}>
        <NiceButton width="25" height="25" />
      </Fade>
    </Button>
  );
};

export default ScrollButton;
