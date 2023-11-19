import styled from 'styled-components';

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: gray;

  /* Media query for tablets */
  @media (max-width: 768px) {
    left: 90%; /* Adjust position for smaller screens */
    font-size: 2rem; /* Smaller font size */
    bottom: 40px; /* Adjust bottom position */
  }

  /* Media query for mobile devices */
  @media (max-width: 480px) {
    left: 90%; /* Adjust position for very small screens */
    font-size: 1.5rem; /* Even smaller font size */
    bottom: 30px; /* Adjust bottom position */
  }
`;
