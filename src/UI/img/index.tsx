import "animate.css";
import styled from "styled-components";



function Img ({className, ImgUrl}:any) {

  return (
    <img className={className} src={ImgUrl} alt=""></img>
  )
}

export const AboutMeImg = styled(Img)`
    width: 80%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }

`;

export const FooterImgLogo = styled(Img)`
    width: 200px;
    height: 200px;
`