import "animate.css";
import styled from "styled-components";

function Button({className, buttonText}:any) {
  return (
  
    <button className={className}>{buttonText}</button> 
    
  );
}

export const ButtonHomePage = styled(Button)`
    
`;

export const ButtonAboutMe = styled(Button)`
  background-color: yellow;
  border: none;
  border-radius: 20px;
  width: 20%;
  height: 30px;
  font-size: 0.9vw;
  font-weight: 600;
  
`;
