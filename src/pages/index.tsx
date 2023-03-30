  
/* UI */
import { HomeContainer } from "@/UI/containers/homebox";
import { HomeAboutMeContainer } from "@/UI/containers/aboutme";
import { FooterContainer } from "@/UI/containers/footer";
import { ComingSoonContainer } from "@/UI/containers/comingsoon";

/* Components */
import { HomeBox } from "@/components/homebox";
import { AboutMeBox } from "@/components/aboutme";
import { FooterBox } from "@/components/footer";
import { Header } from "@/components/header";
import { ComingSoon } from "@/components/comingsoon";

/* TsParticules */
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import { useCallback } from "react";
import particlesOptions from "../lib/particles.json";

/*React Boostrap css*/
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);

  return (
    <div>
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
      <Header/>
      <HomeContainer>
        <HomeBox></HomeBox>
      </HomeContainer>
      <HomeAboutMeContainer>
        <AboutMeBox></AboutMeBox>
      </HomeAboutMeContainer>
      <ComingSoonContainer>
        <ComingSoon></ComingSoon>
      </ComingSoonContainer>
      <FooterContainer>
        <FooterBox></FooterBox>
      </FooterContainer>
    </div>
  );
}
