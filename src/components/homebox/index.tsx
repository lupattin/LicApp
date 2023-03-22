/* UI */
import { HomeParagraphCointainer } from "@/UI/containers/homebox";
import { HomeLogoContainer } from "@/UI/containers/homebox";
import { TitleHomePage } from "@/UI/title";
import { ParagraphHomePage } from "@/UI/paragraph";

/* Logos */
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
        <IgPic className="animate__animated animate__fadeInDown animate__delay-3s" ImgUrl={instagramPic} Page={"https://www.instagram.com/"}></IgPic>
        <LinkedinPic className="animate__animated animate__fadeInDown animate__delay-3s" ImgUrl={linkdinPic} Page={"https://www.linkedin.com/"}></LinkedinPic>
        <WppPic className="animate__animated animate__fadeInDown animate__delay-3s" ImgUrl={whatsappPic} Page={"https://web.whatsapp.com/"}></WppPic>
      </HomeLogoContainer>
    </div>
  );
}
