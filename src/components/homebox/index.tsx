/* UI */
import { HomeParagraphCointainer } from "@/UI/containers/homebox";
import { HomeLogoContainer } from "@/UI/containers/homebox";
import { TitleHomePage } from "@/UI/title";
import { ParagraphHomePage } from "@/UI/paragraph";
import { ButtonHomePage } from "@/UI/button";

/* Logos */
import Image from "next/image";
import facebookPic from '../../../public/facebook.svg'
import linkdinPic from '../../../public/linkedin.svg'
import whatsappPic from '../../../public/whatsapp.svg'

export function HomeBox() {
  return (
    <div>
      <TitleHomePage className={"animate__animated animate__fadeInDown animate__delay-1s "}  title={"Lic Agustina Scasso."} />
      <HomeParagraphCointainer>
        <ParagraphHomePage className={"animate__animated animate__fadeInLeft animate__delay-2s"} text={'Comenza tu tratamiento.'} />
        <ButtonHomePage className={"animate__animated animate__fadeInRight animate__delay-3s"} buttonText={"Haz Click Aquí"}/>
      </HomeParagraphCointainer>
      <HomeLogoContainer>
        <Image className="animate__animated animate__fadeInDown animate__delay-4s" src={facebookPic} alt="Picture of Facebook" width={50} height={50}></Image>
        <Image className="animate__animated animate__fadeInDown animate__delay-4s" src={linkdinPic} alt="Picture of Linklin" width={50} height={50}></Image>
        <Image className="animate__animated animate__fadeInDown animate__delay-4s" src={whatsappPic} alt="Picture of Whatsapp" width={50} height={50}></Image>
      </HomeLogoContainer>
    </div>
  );
}
