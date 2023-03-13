  
/* UI */
import { HomeContainer } from "@/UI/containers";
import { HomeAboutMeContainer } from "@/UI/containers";

/* Components */
import { HomeBox } from "@/components/homebox";
import { AboutMeBox } from "@/components/aboutme";

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
      <HomeContainer>
        <HomeBox></HomeBox>
      </HomeContainer>
      <HomeAboutMeContainer>
        <AboutMeBox></AboutMeBox>
      </HomeAboutMeContainer>
    </div>
  );
}
