/* UI */
import { HomeParagraphCointainer } from "@/UI/containers";
import { TitleHomePage } from "@/UI/title";
import { ParagraphHomePage } from "@/UI/paragraph";
import { ButtonHomePage } from "@/UI/button";


export function HomeBox() {

  return (
    <div>
      <TitleHomePage title={"Lic Agustin Scasso"} />
      <HomeParagraphCointainer>
        <ParagraphHomePage />
        <ButtonHomePage />
      </HomeParagraphCointainer>
    </div>
  );
}
