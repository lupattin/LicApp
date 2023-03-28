import "animate.css";
import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link'



function Img({ className, ImgUrl,  }: any) {


  return (
      
        <Image className={className} src={ImgUrl} alt="" ></Image> 
  )
}

function ImgSocials({ className, ImgUrl, Page }: any) {


  return (
      <Link href={Page}>
        <Image className={className} src={ImgUrl} alt=""></Image> 
      </Link>
  )
}
function Logo({className, ImgUrl, Width, Height}){

  return(
    <Image className={className} src={ImgUrl} alt="" width={Width} height={Height}></Image> 
  )
}

export const LogoImg = styled(Logo)`
    opacity: 0.8;
`
export const LogoImgHeader = styled(Logo)`
    margin-left: 120px;

    @media (max-width: 768px) {        
      margin-left: 95px;
    }   
    @media (max-width: 425px) {        
      margin-left: 0px;
    }   
`

export const ArrowImg = styled(Img)`
   position: relative;
   width: 30px;
   height: 30px;
`;
export const AboutMeImg = styled(Img)`
    width: 100%;
    height: 90%;
    border-radius: 130px;
    @media screen and (max-width: 768px) {
      width: 100%;      
    }

`;
export const WaveAboutMeTop = styled(Img)`
  position: relative;
  transform: rotate(180deg);
  width: 100%;
`
export const WaveAboutMeBottom= styled(Img)`
  position: relative;
  width: 100%;
`

export const FooterImgLogo = styled(Img)`
    width: 200px;
    height: 200px;  
    :hover{
      padding: 20px;
      transition: all 1s;
    
    } 
    @media (max-width: 425px) {        
        width: 100%;
        height: 100%;
    }
    @media (max-width: 728px) {        
        width: 100%;
        height: 70%;
    }    
`;

export const IgPic = styled(ImgSocials)`
  width: 70px;
  height: 70px;
  position: relative;
  cursor: pointer; 
  :hover{        
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    margin: 0px;
    border-radius: 30px;
    transition: all 0.3s; 
  }
`
export const LinkedinPic = styled(ImgSocials)`
  width: 70px;
  height: 70px;  
  padding: 10px; 
  cursor: pointer; 
  :hover{
    background-color: #0e76a8;  
    transition: all 0.3s;
    border-radius: 15px;
  }
`
export const WppPic = styled(ImgSocials)`
  width: 70px;
  height: 70px;
  padding: 10px;
  cursor: pointer;
  :hover{
    background-color:#25d366;
    transition: all 0.3s;
    border-radius: 30px;
  }
`