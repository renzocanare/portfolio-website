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
        "Pet Shrimp (yes, these aren't for eating)",
        "DJing 2000's Music"
      ],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1500,
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
