import "animate.css";
import styled from "styled-components";
import Image from "next/image";



function Img({ className, ImgUrl }: any) {

  return (
    <Image className={className} src={ImgUrl} alt=""></Image>
  )
}

export const AboutMeImg = styled(Img)`
    width: 100%;
    height: 90%;
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
`;

export const IgPic = styled(Img)`
  width: 70px;
  height: 70px;
  position: relative;
  
  :hover{        
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    margin: 0px;
    border-radius: 30px;
    transition: all 0.3s; 
  }
`
export const LinkedinPic = styled(Img)`
  width: 70px;
  height: 70px;
  position: relative;
  padding: 10px;
  
  :hover{
    background-color: #0e76a8;  
    transition: all 0.3s;
    border-radius: 15px;
  }
`
export const WppPic = styled(Img)`
  width: 70px;
  height: 70px;
  padding: 10px;
  :hover{
    background-color:#25d366;
    transition: all 0.3s;
    border-radius: 30px;
  }
`