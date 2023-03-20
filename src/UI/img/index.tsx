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
    @media (max-width: 425px) {        
        width: 100%;
        height: 100%;
    }
    @media (max-width: 728px) {        
        width: 100%;
        height: 70%;
    }
    
`