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
      
  `;
  
  export const TitleAboutMe = styled(Title)`
    font-size: 20px;
  `
