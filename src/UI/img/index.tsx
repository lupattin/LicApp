import "animate.css";
import styled from "styled-components";


function Img ({className, ImgUrl}) {

  return (
    <img className={className} src={ImgUrl} alt=""></img>
  )
}

export const AboutMeImg = styled(Img)`
    width: 80%;

`;