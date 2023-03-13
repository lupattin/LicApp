import "animate.css";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';

<<<<<<< HEAD
function Button({className, buttonText}:any) {
=======
function Buttons({className, buttonText}:any) {
>>>>>>> e75f040465ca55c6f2ad7708d0f01c596b5dd7b9
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
<<<<<<< HEAD
  font-size: 0.9vw;
  font-weight: 600;
=======
  font-size: 15px;
  font-weight: 700;
>>>>>>> e75f040465ca55c6f2ad7708d0f01c596b5dd7b9
  
`;
