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

/*Photo*/
import aboutMePhoto from '../../../public/AgusFoto.png'
import wavePhotoBottom from '../../../public/wavesBottom.svg'
import wavePhotoTop from '../../../public/wavesTop.svg' 

export function AboutMeBox() {
  const AboutMeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  return (
    <>
      <WaveAboutMeTop ImgUrl ={wavePhotoTop}/>
      <AboutMeContainer>
        <AboutMeTextContainer>
          <TitleAboutMe className={"title"} title={"Conoceme un poco más."}></TitleAboutMe>
          <ParagraphAboutMe className={"Paragraph"} text={AboutMeText}></ParagraphAboutMe>
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