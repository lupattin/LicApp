/* UI */
import { HomeParagraphCointainer } from "@/UI/containers";
import { TitleHomePage } from "@/UI/title";
import { ParagraphHomePage } from "@/UI/paragraph";
import { ButtonHomePage } from "@/UI/button";



export function HomeBox() {
  return (
    <div>
      <TitleHomePage className={"animate__animated animate__fadeInDown animate__delay-1s "}  title={"Lic Agustina Scasso."} />
      <HomeParagraphCointainer>
        <ParagraphHomePage className={"animate__animated animate__fadeInUp animate__delay-2s"} text={'Comenza tu tratamiento.'} />
        <ButtonHomePage className={"animate__animated animate__fadeInRight animate__delay-3s"} buttonText={"Haz Click Aquí"}/>
      </HomeParagraphCointainer>
    </div>
  );
}
