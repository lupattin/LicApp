/* UI */
import { HomeParagraphCointainer } from "@/UI/containers/homebox";
import { HomeLogoContainer } from "@/UI/containers/homebox";
import { TitleHomePage } from "@/UI/title";
import { ParagraphHomePage } from "@/UI/paragraph";
import { ButtonHomePage } from "@/UI/button";

/* Logos */
import Image from "next/image";
import  instagramPic from '../../../public/igsvg1.svg'
import linkdinPic from '../../../public/linkedin.svg'
import whatsappPic from '../../../public/whatsapp.svg'

import { IgPic } from "@/UI/img";
import { LinkedinPic } from "@/UI/img";
import { WppPic } from "@/UI/img";

export function HomeBox() {
  return (
    <div>
      <TitleHomePage className={"animate__animated animate__fadeInDown animate__delay-1s "}  title={"Lic Agustina Scasso."} />
      <HomeParagraphCointainer>
        <ParagraphHomePage className={"animate__animated animate__fadeInLeft animate__delay-2s"} text={'Comenza tu tratamiento.'} />
      </HomeParagraphCointainer>
      <HomeLogoContainer>
        <IgPic className="animate__animated animate__fadeInDown animate__delay-3s" ImgUrl={instagramPic}></IgPic>
        <LinkedinPic className="animate__animated animate__fadeInDown animate__delay-3s" ImgUrl={linkdinPic}></LinkedinPic>
        <WppPic className="animate__animated animate__fadeInDown animate__delay-3s" ImgUrl={whatsappPic}></WppPic>
      </HomeLogoContainer>
    </div>
  );
}
