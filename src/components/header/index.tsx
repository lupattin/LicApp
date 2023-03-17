/* UI */
import { HeaderContainer } from "@/UI/containers/header";
import Image from "next/image";

/* IMG */
import arrowPic from '../../../public/arrowUp.svg'


export function Header() {
    
    return (
      <HeaderContainer >
        <Image src={arrowPic} alt="Picture of Facebook" width={30} height={30}></Image>
      </HeaderContainer>
    );
  }

