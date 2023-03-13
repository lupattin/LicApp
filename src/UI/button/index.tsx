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
  background-color: yellow;
  border: none;
  border-radius: 20px;
  width: 20%;
  height: 30px;
  font-size: 15px;
  font-weight: 700;
  
`;
