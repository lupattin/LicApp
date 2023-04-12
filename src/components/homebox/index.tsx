import React, { useState } from 'react';
/* UI */
import { HomeParagraphCointainer } from "@/UI/containers/homebox";
import { HomeLogoContainer } from "@/UI/containers/homebox";
import { TitleHomePage } from "@/UI/title";
import { ParagraphHomePage } from "@/UI/paragraph";

/* Logos */
import { LogoImg } from '@/UI/img';
import  instagramPic from '../../../public/igsvg1.svg'
import linkdinPic from '../../../public/linkedin.svg'
import whatsappPic from '../../../public/whatsapp.svg'
import { IgPic } from "@/UI/img";
import { LinkedinPic } from "@/UI/img";
import { WppPic } from "@/UI/img";
import LogoPic from "../../../public/AsLogo.svg"
/* Components */

import { ModalSendEmail } from '../modal';

export function HomeBox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <LogoImg className={"animate__animated animate__fadeIn animate__delay-1s"} ImgUrl={LogoPic} Width={350} Height={200} ></LogoImg>
      <TitleHomePage className={"animate__animated animate__fadeInDown animate__delay-2s "}  title={"Lic. Agustina Scasso."} />
       <p className="animate__animated animate__fadeInDown animate__delay-2s ">Psicóloga</p>
      <HomeParagraphCointainer>
        <ParagraphHomePage onClick={handleShow} className={"animate__animated animate__fadeInLeft animate__delay-3s"} text={'COMENZÁ TU TRATAMIENTO'} />
      </HomeParagraphCointainer>
      <HomeLogoContainer>
        <IgPic className="animate__animated animate__fadeInDown animate__delay-4s" ImgUrl={instagramPic} Page={"https://www.instagram.com/psico.agustinascasso/"}></IgPic>
        <LinkedinPic className="animate__animated animate__fadeInDown animate__delay-4s" ImgUrl={linkdinPic} Page={"https://ar.linkedin.com/in/agustina-scasso-a69a6b142"}></LinkedinPic>
        <WppPic className="animate__animated animate__fadeInDown animate__delay-4s" ImgUrl={whatsappPic} Page={"https://api.whatsapp.com/send?phone=5492944149524"}></WppPic>
      </HomeLogoContainer>

      <ModalSendEmail show={show} handleClose={handleClose}></ModalSendEmail>
    </div>
    
  );
}
