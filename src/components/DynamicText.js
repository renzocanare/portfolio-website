import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { TypedList } from "../helpers/TypedList";
import '../styles/DynamicText.css';

const DynamicText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: TypedList,
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
