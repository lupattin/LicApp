import "animate.css";
import styled from "styled-components";

function Paragraph({className, text}:any) {
  return (
    <h1 className={className}>{text}</h1>
  );
}

export const ParagraphHomePage = styled(Paragraph)`
   position: relative;
`;

export const ParagraphAboutMe = styled(Paragraph)`
  font-size: 1vw;
  font-weight: 100;
  color: white;
  width: 100%;
  text-align: start;
  font-family: "Lexend", "sans-serif"; 
  

`