import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw; 
    height: 100vh;
    margin: auto;
`
export const HomeParagraphCointainer = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row ;
    align-items: center;
    width: 60vw;
    height: 20vh;
    justify-content: space-evenly; 
    position: relative;
    
    @media (max-width: 1440px) {
          width:70vw
        }
    @media (max-width: 1024px) {
          width:80vw
        }
    @media (max-width: 768px) {
          width:90vw
        }
`

export const HomeLogoContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
`
export const HomeAboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw; 
    height: 100vh;
    text-align: center;
`
export const AboutMeContainer = styled.div`
    background-color:#575e79;
    display: flex;
    flex-direction: row;
    align-items: center;    
    width: 80%;
    height: 80%;
    z-index: 1;
    @media screen and (max-width: 480px){
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        
    }
    @media screen and (max-width: 768px){
        width: 100%;
        
    }
    
`
export const AboutMeTextContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width:60%;
    margin: 40px;    
    gap: 40px;
    @media screen and (max-width: 480px) {
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 768px){
        width: 60%; 
        margin: 10px; 
        margin: 25px;
        
    }
`
export const AboutMeImgContainer = styled.div `
    width: 50%;
`

export const FooterContainer = styled.div`
    position: relative;
    background-color: #3f455f;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
`
export const FooterImgContainer = styled.div`
   border-left: 2px solid white;
   border-right: 2px solid white;
   width: 40%;
   text-align: center;
`
export const FooterListContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
    
`

export const SocialMediaFooterContainter = styled.div`
    width: 30%;
    display: flex;    
    justify-content: space-evenly;
    cursor: pointer;
    
    
`