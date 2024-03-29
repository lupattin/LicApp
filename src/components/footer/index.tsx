/*UI*/
import { FooterContainer, FooterListContainer, SocialMediaFooterContainter } from "@/UI/containers/footer"
import { FooterImgLogo } from "@/UI/img"
import { FooterImgContainer } from "@/UI/containers/footer"
import { FooterList } from "@/UI/list"
import { IgPic } from "@/UI/img"
import { LinkedinPic } from "@/UI/img"
import { WppPic } from "@/UI/img"

/*Logos*/
import igPic from '../../../public/igsvg1.svg'
import linkdinPic from '../../../public/linkedin.svg'
import whatsappPic from '../../../public/whatsapp.svg'
import footerImgPhoto from '../../../public/AsLogo.svg'

export function FooterBox() {
    return (
        <FooterContainer>
            <FooterListContainer>
                <FooterList className={'listado'}></FooterList>
            </FooterListContainer>
            
            <FooterImgContainer onClick={() => {window.scroll(0, 0)}}>
                <FooterImgLogo  className='footerImgLogo' ImgUrl={footerImgPhoto}></FooterImgLogo>
            </FooterImgContainer>
            <SocialMediaFooterContainter>
                <IgPic src={igPic} alt="Picture of Facebook"  ImgUrl={igPic} Page={"https://www.instagram.com/psico.agustinascasso/"}></IgPic>
                <LinkedinPic src={linkdinPic} alt="Picture of Linklin" ImgUrl={linkdinPic} Page={"https://ar.linkedin.com/in/agustina-scasso-a69a6b142"} ></LinkedinPic>
                <WppPic src={whatsappPic} alt="Picture of Whatsapp" ImgUrl={whatsappPic} Page={"https://api.whatsapp.com/send?phone=5492944149524"}></WppPic>
            </SocialMediaFooterContainter>
        </FooterContainer>
    )
}