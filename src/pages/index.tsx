/* Components */
import { HomeContainer } from "@/UI/containers";
import { HomeParagraphCointainer } from "@/UI/containers";
import { TitleHomePage } from "@/UI/title";
import { ParagraphHomePage } from "@/UI/paragraph";
import { ButtonHomePage } from "@/UI/button";
/* TsParticules */
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import { useCallback } from "react";
import particlesOptions from "../lib/particles.json";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);
  return (
    <div>
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
      <HomeContainer>
        <TitleHomePage />
          <HomeParagraphCointainer>
            <ParagraphHomePage/>
            <ButtonHomePage/>
          </HomeParagraphCointainer>
      </HomeContainer>
    </div>
  );
}
