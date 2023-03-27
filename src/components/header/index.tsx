/* UI */
import { HeaderContainer } from "@/UI/containers/header";
import { MenuContainer } from "@/UI/containers/header";
import { NavbarStyled } from "@/UI/navbar";
import Image from "next/image";
import { ArrowImg } from "@/UI/img";

/* IMG */
import arrowPic from '../../../public/arrowUp.svg'
import LogoPic from "../../../public/AsLogo.svg"



export function Header() {
    
    return (
      <>
        <HeaderContainer >
          <MenuContainer>
          <Image style={{marginLeft:"120px"}}  src={LogoPic} alt="Logo" width={70} height={70}></Image>
              <NavbarStyled className={""}/>
          </MenuContainer>
          <ArrowImg ImgUrl={arrowPic}></ArrowImg>
        </HeaderContainer>
      </>
    );
  }

