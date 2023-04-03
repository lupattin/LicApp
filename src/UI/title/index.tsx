import "animate.css";
import styled from "styled-components";

function Title({ className, title }: any) {
  return (
    <h1 className={className}> {title} </h1>
  );
}
export const TitleHomePage = styled(Title)`

      color: #efd3ea;
      position: relative;
      font-weight: 700;
      font-size: 55px;
      text-align: center;
      width: 70vw;
      margin: auto;

      @media (max-width: 1024px) {
        font-size:45px;
        width:80vw
      }
      @media (max-width: 768px) {
        font-size:40px;
      }
      @media (max-width: 425px) {
        font-size:32px;
        width: 90vw;
      }
      
  `;

export const TitleAboutMe = styled(Title)`
    font-size: 3.5vw;
    text-align: start;
    font-weight: 700;
    width: 90%;

    
  @media screen and (max-width: 425px) {
    margin: 0;
  }
  @media (min-width: 425px) and (orientation: landscape){
      font-size: 1.8rem;

  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
`
