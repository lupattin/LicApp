import "animate.css";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';

function Buttons({className, buttonText}:any) {
  
  return (
  
    <Button size="lg" variant="light" className={className}>{buttonText}</Button> 
    
  );
}

export const ButtonHomePage = styled(Buttons)`
    
`;

export const ButtonAboutMe = styled(Buttons)`  
  border: none;
  border-radius: 20px;
  width: 40%;
  height: auto;
  font-size: 1.2vw;
  font-weight: 600;
 

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 150px;
    height: auto;
    overflow-wrap: break-word;

  }
  
`;
