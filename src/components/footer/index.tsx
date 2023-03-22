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
import footerImgPhoto from '../../../public/aboutme-10.png'


export function FooterBox() {
    return (
        <FooterContainer>
            <FooterListContainer>
                <FooterList className={'listado'}></FooterList>
            </FooterListContainer>
            
            <FooterImgContainer>
                <FooterImgLogo className='footerImgLogo' ImgUrl={footerImgPhoto}></FooterImgLogo>
            </FooterImgContainer>
            <SocialMediaFooterContainter>
                <IgPic src={igPic} alt="Picture of Facebook"  ImgUrl={igPic}></IgPic>
                <LinkedinPic src={linkdinPic} alt="Picture of Linklin" ImgUrl={linkdinPic} ></LinkedinPic>
                <WppPic src={whatsappPic} alt="Picture of Whatsapp" ImgUrl={whatsappPic}></WppPic>
            </SocialMediaFooterContainter>
        </FooterContainer>
    )
}