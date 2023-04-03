import "animate.css";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';

function Buttons({className, buttonText}:any) {
  /*  */
  return (
  
    <Button size="lg" variant="light" className={className}>{buttonText}</Button> 
    
  );
}

export const ButtonHomePage = styled(Buttons)`
    @media (max-width: 768px) {
          width: 180px;
          height: 40px;
          font-size: 15px;
        }
    @media (max-width: 425px) {
          font-size:16px;
          width: 130px;
          height: 32px;
          font-size: 12px;
      }
`;

export const ButtonAboutMe = styled(Buttons)`  
  border: none;
  border-radius: 20px;
  width: 40%;
  height: auto;
  font-size: 1.2vw;
  font-weight: 600;
  margin-left: 12%;

  @media screen and (max-width: 425px){
    font-size: 3.8vw;
    margin-left: 0%;

  }

  @media (max-width: 425px) and (orientation: landscape) {
    font-size: 2.3vw;

  }

 

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 150px;
    height: auto;
    overflow-wrap: break-word;

  }
  
`;
