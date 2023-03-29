import styled from "styled-components";

export const HomeAboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw; 
    height: 100vh;
    text-align: center;
    margin-bottom: 700px;
`
export const AboutMeContainer = styled.div`
    background-color:#575e79;
    display: flex;
    flex-direction: row;
    align-items: center;   
    justify-content: center;
    width: 100%;
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
    width: 50%;
    margin-left: 90px;    
    gap: 40px;
    @media screen and (max-width: 480px) {
        display: flex;
        align-items: center;
        margin: 0;
    }
    @media screen and (max-width: 768px){
        width: 60%; 
        margin: 10px; 
        margin: 25px;
        
    }
`
export const AboutMeImgContainer = styled.div `
    width: 30%;
    @media screen and (max-width: 768px){
        width: 50%;
        
    }
`