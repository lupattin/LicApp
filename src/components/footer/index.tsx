/*UI*/
import { FooterContainer, FooterListContainer, SocialMediaFooterContainter } from "@/UI/containers/footer"
import { FooterImgLogo } from "@/UI/img"
import { FooterImgContainer } from "@/UI/containers/footer"
import { FooterList } from "@/UI/list"

/*Logos*/
import Image from "next/image";
import facebookPic from '../../../public/facebook.svg'
import linkdinPic from '../../../public/linkedin.svg'
import whatsappPic from '../../../public/whatsapp.svg'

export function FooterBox() {
    return (
        <FooterContainer>
            <FooterListContainer>
                <FooterList className={'listado'}></FooterList>
            </FooterListContainer>
            
            <FooterImgContainer>
                <FooterImgLogo className='footerImgLogo' ImgUrl='https://nutriloca.com/wp-content/uploads/2021/05/aboutme-10.png'></FooterImgLogo>
            </FooterImgContainer>
            <SocialMediaFooterContainter>
                <Image src={facebookPic} alt="Picture of Facebook" width={50} height={50}></Image>
                <Image src={linkdinPic} alt="Picture of Linklin" width={50} height={50}></Image>
                <Image src={whatsappPic} alt="Picture of Whatsapp" width={50} height={50}></Image>
            </SocialMediaFooterContainter>
        </FooterContainer>
    )
}