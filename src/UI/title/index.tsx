import "animate.css";
import styled from "styled-components";

function Title({title}) {
  return (
    <h1 className="animate__animated animate__fadeInDown animate__delay-1s"> {title} </h1>
  );
}

export const TitleHomePage = styled(Title)`
    font-family: "Lexend", sans-serif;
    font-size: 700;
`;

export const TitleAboutMe = styled(Title)`
  font-size: 20px;
`