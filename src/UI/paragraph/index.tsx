import "animate.css";
import styled from "styled-components";

function Paragraph() {
  return (
    <h1 className="animate__animated animate__fadeInDown animate__delay-2s"> Solicita tu turno. </h1>
  );
}

export const ParagraphHomePage = styled(Paragraph)`
    font-family: "Lexend", sans-serif;
    font-size: 400;
`;
