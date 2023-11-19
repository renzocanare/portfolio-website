import React, {useState} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 
import { Button } from '../styles/ScrollButton'; 
  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  const pageScroll = 500
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > pageScroll){ 
      setVisible(true) 
    }  
    else if (scrolled <= pageScroll){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <Button> 
     <FaArrowCircleUp onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}} /> 
    </Button> 
  ); 
} 
  
export default ScrollButton; 