import { AboutMeContainer } from "@/UI/containers/aboutme";
import { TitleAboutMe } from "@/UI/title";
import { ParagraphAboutMe } from "@/UI/paragraph";
import { ButtonAboutMe } from "@/UI/button"
import { AboutMeImg } from "@/UI/img/index"
import { AboutMeTextContainer } from "@/UI/containers/aboutme";
import { AboutMeImgContainer } from "@/UI/containers/aboutme"
import aboutMePhoto from '../../../public/aboutme-10.png'
export function AboutMeBox() {
  const AboutMeText = 'Ya vamos a eso, pero antes me gustaría comentar que desde hace un tempo largo -algunos años quizás- me vienen conflictuando las presentaciones formales académicas institucionalizadas. Empecé a notarlo en el momento de ser presentada (o me tengo que presentar) en charlas, conferencias, reuniones, lo que sea'
 
  return (
    <AboutMeContainer>
      <AboutMeTextContainer>
        <TitleAboutMe className={"title"} title={"Quien te conoce Agus?"}></TitleAboutMe>
        <ParagraphAboutMe className={"Paragraph"} text={AboutMeText}></ParagraphAboutMe>
        <ButtonAboutMe className={"Button"} buttonText="Leer Más"></ButtonAboutMe>
      </AboutMeTextContainer>

      <AboutMeImgContainer>
        <AboutMeImg className="img" ImgUrl={aboutMePhoto}></AboutMeImg>
      </AboutMeImgContainer>

    </AboutMeContainer>
  );
}