import "animate.css";
import styled from "styled-components";

function Title({className, title}:any) {
  return (
    <h1 className={className}> {title} </h1>
  );
}
  export const TitleHomePage = styled(Title)`
      color: red;
      position: relative;
      font-family: "Lexend", "sans-serif";
      font-weight: 700;      
      @media (max-width: 768px) {
    width: 150px;
  }
      
  `;
  
  export const TitleAboutMe = styled(Title)`
    font-size: 3.5vw;
    text-align: start;
    font-weight: 700;
    width: 90%;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      width: 100%;
    }
  `
