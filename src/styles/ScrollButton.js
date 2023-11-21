import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #21325e;
  right: 30px; 
  bottom: 20px; 
  position: fixed;
  z-index: 99;
  cursor: pointer;
  border-radius: 10px;
  width: 40px;
  height: 50px;
  transition: opacity 0.5s ease-in-out, transform 0.3s ease;
  box-shadow: 0 9px 25px 0 rgba(132,128,177,0.28);f
  margin: 0em;
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 7px;

  /* Media query for tablets */
  @media only screen and (max-width: 768px) {
    right: 30px; 
    bottom: 40px; 
  }

  /* Media query for mobile devices */
  @media only screen and (max-width: 480px) {
    right: 30px; 
    bottom: 40px; 
  }

  &:hover {
    transform: scale(1.1); 
  }
`;
