import { AboutMeContainer } from "@/UI/containers";
import { TitleAboutMe } from "@/UI/title";
import { ParagraphAboutMe } from "@/UI/paragraph";
import { ButtonAboutMe } from "@/UI/button"
import { AboutMeImg } from "@/UI/img/index"
import { AboutMeTextContainer } from "@/UI/containers";
import { AboutMeImgContainer } from "@/UI/containers"
export function AboutMeBox() {
  const AboutMeText = 'Ya vamos a eso, pero antes me gustaría comentar que desde hace un tempo largo -algunos años quizás- me vienen conflictuando las presentaciones formales académicas institucionalizadas. Empecé a notarlo en el momento de ser presentada (o me tengo que presentar) en charlas, conferencias, reuniones, lo que sea'
  return (
    <AboutMeContainer>
      <AboutMeTextContainer>
        <TitleAboutMe className={"prueba"} title={"Quien te conoce Agus?"}></TitleAboutMe>
        <ParagraphAboutMe className={"prueba2"} text={AboutMeText}></ParagraphAboutMe>
        <ButtonAboutMe className={"prueba3"} buttonText="Leer Más"></ButtonAboutMe>
      </AboutMeTextContainer>

      <AboutMeImgContainer>
        <AboutMeImg clasName="prueba4" ImgUrl="https://nutriloca.com/wp-content/uploads/2021/05/aboutme-10.png"></AboutMeImg>
      </AboutMeImgContainer>

    </AboutMeContainer>
  );
}