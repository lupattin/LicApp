/* UI */
import { HomeParagraphCointainer } from "@/UI/containers";
import { TitleHomePage } from "@/UI/title";
import { ParagraphHomePage } from "@/UI/paragraph";
import { ButtonHomePage } from "@/UI/button";



export function HomeBox() {
  const HomeText = 'Solicita tu turno'
  return (
    <div>
      <TitleHomePage className={"prueba"} title={"Lic Agustin Scasso"} />
      <HomeParagraphCointainer>
        <ParagraphHomePage className={"prueba3"} text={HomeText} />
        <ButtonHomePage buttonText={"Haz Click Aquí"}/>
      </HomeParagraphCointainer>
    </div>
  );
}
