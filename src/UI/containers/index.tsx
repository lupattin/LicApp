import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw; 
    height: 100vh;
    position: relative;
`
export const HomeParagraphCointainer = styled.div`
    display: flex;
    flex-direction: row ;
    align-items: center;
    width: 50vw;
    height: 20vh;
    justify-content: space-around; 
    position: relative;
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