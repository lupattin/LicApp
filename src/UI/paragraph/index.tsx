import "animate.css";
import styled from "styled-components";

function Paragraph({className, text}:any) {
  return (
    <h1 className={className}>{text}</h1>
  );
}

export const ParagraphHomePage = styled(Paragraph)`
   position: relative;
   font-weight: 700;
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