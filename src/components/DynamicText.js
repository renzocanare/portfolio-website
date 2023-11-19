import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/DynamicText.css';

const DynamicText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Computer Engineering Student at NUS", 
        "Hardware Engineering and Design",
        "Machine Learning and Data Science",
        "GameBoy Modding",
        "Pet Shrimp (yes, I don't eat them)",
        "DJing 2000's Music"
      ],
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    // Clean up
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="dynamic-text-container">
      <span ref={el}></span> 
    </div>
  );
};

export default DynamicText;
