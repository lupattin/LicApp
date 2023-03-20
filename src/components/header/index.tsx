/* UI */
import { HeaderContainer } from "@/UI/containers/header";
import { MenuContainer } from "@/UI/containers/header";
import { NavbarStyled } from "@/UI/navbar";
import Image from "next/image";

/* IMG */
import arrowPic from '../../../public/arrowUp.svg'



export function Header() {
    
    return (
      <HeaderContainer >
        <MenuContainer>
        <Image  src={"https://nutriloca.com/wp-content/uploads/2021/05/aboutme-10.png"} alt="Logo" width={70} height={70}></Image>
            <NavbarStyled className={""}/>
        </MenuContainer>
        <Image style={{position:"relative"}} src={arrowPic} alt="Arrow from Menu" width={30} height={30}></Image>
      </HeaderContainer>
    );
  }

