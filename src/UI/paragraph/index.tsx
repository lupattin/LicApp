import "animate.css";
import styled from "styled-components";

function Paragraph({className, text}:any) {
  return (
    <h3 className={className}>{text}</h3>
  );
}

export const ParagraphHomePage = styled(Paragraph)`
   position: relative;
   font-weight: 700;
   margin: 0;
   transition: font-size .5s ease;
   transition: 0.3s;
   &:hover {
      font-size: 35px;
      cursor: pointer;
      color: red;
    }

   @media (max-width: 768px) {
          font-size:25px;
        }

   @media (max-width: 425px) {
        font-size:16px;
        
      }
`;

export const ParagraphAboutMe = styled(Paragraph)`
  font-size: 1.2vw;
  font-weight: 100;
  color: white;
  width: 70%;
  text-align: start;
  font-family: "Lexend", "sans-serif"; 

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
  

`