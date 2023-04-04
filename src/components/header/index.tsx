/* UI */
import { HeaderContainer } from "@/UI/containers/header";
import { MenuContainer } from "@/UI/containers/header";
import { NavbarStyled } from "@/UI/navbar";
import { ArrowImg } from "@/UI/img";
import { LogoImgHeader } from "@/UI/img";

/* IMG */
import arrowPic from '../../../public/arrowUp.svg'
import LogoPic from "../../../public/AsLogo.svg"



export function Header() {
    
    return (
      <>
        <HeaderContainer >
          <MenuContainer>
          <LogoImgHeader className={"LogoImgHeader"}  ImgUrl={LogoPic} Width={70} Height={70}></LogoImgHeader>
              <NavbarStyled className={""}/>
          </MenuContainer>
          <ArrowImg ImgUrl={arrowPic}></ArrowImg>
        </HeaderContainer>
      </>
    );
  }

