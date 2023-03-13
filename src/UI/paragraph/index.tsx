import "animate.css";
import styled from "styled-components";

function Paragraph({className, text}) {
  return (
    <h1 className={className}>{text}</h1>
  );
}

export const ParagraphHomePage = styled(Paragraph)`
   position: relative;
   font-weight: 700;
`;

export const ParagraphAboutMe = styled(Paragraph)`
  font-size: 16px;
  font-weight: 700;
  color: white;
  width: 100%;
  text-align: start;

`