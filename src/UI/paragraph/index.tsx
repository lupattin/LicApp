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
<<<<<<< HEAD
  font-size: 1vw;
  font-weight: 100;
=======
  font-size: 16px;
  font-weight: 700;
>>>>>>> e75f040465ca55c6f2ad7708d0f01c596b5dd7b9
  color: white;
  width: 100%;
  text-align: start;
  font-family: "Lexend", "sans-serif"; 
  

`