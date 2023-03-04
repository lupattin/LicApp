import "animate.css";
import styled from "styled-components";

function Title() {
  return (
    <h1 className="animate__animated animate__fadeInDown animate__delay-1s"> Lic. Agustina Scasso </h1>
  );
}

export const TitleHomePage = styled(Title)`
    font-family: "Lexend", sans-serif;
    font-size: 700;
`;
