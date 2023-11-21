import React, { useState } from 'react';
import '../styles/CertCard.css';

function CertCard({ frontContent, backContent, linkToCertificate, certReady, description, backgroundColor }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-front">
          <div className="image-container">
            {typeof frontContent === 'string'
              ? <img src={frontContent} alt={description} />
              : frontContent
            }
          </div>
          <div className="description">{description}</div>
        </div>
        <div className="flip-card-back" style={cardStyle}>
          <div className='back-content'>{backContent}</div>
          {certReady === true
            ? <a href={linkToCertificate} target="_blank" rel="noreferrer" className="certificate-link">VIEW CERTIFICATE</a>
            : <div className='no-certificate'>NOT READY</div>
          }
          
        </div>
      </div>
    </div>
  );
}

export default CertCard;
