import { useState } from "react";

/*Containers*/
import { AboutMeContainer } from "@/UI/containers/aboutme";

/*UI*/
import { TitleAboutMe } from "@/UI/title";
import { ParagraphAboutMe } from "@/UI/paragraph";
import { ButtonAboutMe } from "@/UI/button"
import { AboutMeImg } from "@/UI/img/index"
import { AboutMeTextContainer } from "@/UI/containers/aboutme";
import { AboutMeImgContainer } from "@/UI/containers/aboutme"
import { WaveAboutMeBottom } from "@/UI/img/index";
import { WaveAboutMeTop } from "@/UI/img/index"
/* component */

import { ModalMoreInfo } from "../modal";

/*Photo*/
import aboutMePhoto from '../../../public/AgusFoto.png'
import wavePhotoBottom from '../../../public/wavesBottom.svg'
import wavePhotoTop from '../../../public/wavesTop.svg'
import React from "react";

export function AboutMeBox() {
  const AboutMeText = 'Desde el punto de vista académico, podemos decir que soy licenciada en psicología, tengo el título de docente y también hice un posgrado en terapias psicoanalíticas para adultos. Lo cierto es que esto queda bastante corto a la hora de presentarme, ya que para llegar a donde estoy, mi recorrido fue mucho más extenso de lo que pueden dar cuenta los títulos académicos...'

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


import wavePhotoTop from '../../../public/wavesTop.svg'

export function AboutMeBox() {
  const AboutMeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'


  return (
    <>
      <WaveAboutMeTop ImgUrl={wavePhotoTop} />
      <AboutMeContainer>
        <AboutMeTextContainer>
          <TitleAboutMe className={"title"} title={"Conoceme un poco más."}></TitleAboutMe>
          <ParagraphAboutMe onClick={()=>{""}} className={"Paragraph"} text={AboutMeText}></ParagraphAboutMe>
          <ButtonAboutMe className={"Button"} buttonText="Leer Más" onClick={handleShow}></ButtonAboutMe>
          <ParagraphAboutMe onClick={() => { "" }} className={"Paragraph"} text={AboutMeText}></ParagraphAboutMe>
          <ButtonAboutMe className={"Button"} buttonText="Leer Más"></ButtonAboutMe>

        </AboutMeTextContainer>

        <AboutMeImgContainer>
          <AboutMeImg className="img" ImgUrl={aboutMePhoto}></AboutMeImg>
        </AboutMeImgContainer>

      </AboutMeContainer>
      <WaveAboutMeBottom ImgUrl={wavePhotoBottom} />
    </>
  );
}