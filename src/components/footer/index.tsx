/*UI*/
import { FooterContainer } from "@/UI/containers"
import { FooterImgLogo } from "@/UI/img"
import { FooterImgContainer } from "@/UI/containers"
import { FooterList } from "@/UI/list" 


export function FooterBox () {
    return (
        <FooterContainer>          
            <FooterList className={'listado'}></FooterList>
            <FooterImgContainer>
            <FooterImgLogo className='footerImgLogo' ImgUrl='https://nutriloca.com/wp-content/uploads/2021/05/aboutme-10.png'></FooterImgLogo>
            </FooterImgContainer>
            <div style={{color: "white", margin:"auto"}}>aca van los logos de redes sociales</div>
        </FooterContainer>
    )
}