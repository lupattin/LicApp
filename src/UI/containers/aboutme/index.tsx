import styled from "styled-components";

export const HomeAboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw; 
    height: 130vh;
    text-align: center;
    margin-bottom: 700px;
    @media (max-width: 425px) {
          height: 170vh;
        }
`
export const AboutMeContainer = styled.div`
    background-color:#575e79;
    display: flex;
    flex-direction: row;
    align-items: center;   
    justify-content: center;
    width: 100%;
    height: 100%;
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
        width: 80%;
        gap: 27px;
    }
    @media (max-width: 425px) and (orientation: landscape){
        width: 60%;
        margin-left: 12px;
       

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
    @media screen and (max-width: 425px){
        width: 45%;

    }
`