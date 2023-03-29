import "animate.css";
import styled from "styled-components";

function Paragraph({className, text, onClick}:any) {
  return (
    <h3 onClick={()=>{onClick()}} className={className}>{text}</h3>
  );
}

export const ParagraphHomePage = styled(Paragraph)`
   position: relative;
   font-weight: 700;
   margin: 0;
   transition: font-size .5s ease;
   transition: 0.3s;
   color: #706f6d;
   &:hover {
      font-size: 35px;
      cursor: pointer;
      color: #4f473f;
    }
   @media (max-width: 768px) {
          font-size:25px;
    }
   @media (max-width: 425px) {
        font-size:16px;       
    }
`;

export const ParagraphAboutMe = styled(Paragraph)`
  font-size: 1.6vw;
  font-weight: 100;
  color: #efd3ea;
  width: 70%;
  text-align: start;
  font-family: "Lexend", "sans-serif"; 

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
  @media screen and (max-width: 425px) {
      margin: 0;
    }
`