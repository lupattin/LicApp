import styled from "styled-components";


export const FooterContainer = styled.div`
    position: relative;
    background-color: #3f455f;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
             
    }
`
export const FooterImgContainer = styled.div`
   border-left: 2px solid white;
   border-right: 2px solid white;
   width: 35%;
   text-align: center;
   cursor: pointer;
   @media (max-width: 425px) {
       width: 50%;
       border: none;
       justify-content: space-evenly;

    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const FooterListContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 425px) {
      display: none;
    }
    @media (max-width: 768px) {
        height: 50%;        
        align-items: center;
    }      
`

export const SocialMediaFooterContainter = styled.div`
    width: 30%;
    display: flex;    
    justify-content: space-evenly;
    cursor: pointer;
    align-items: center;
    @media (max-width: 425px) {
        width: auto;           
    }
    @media (max-width: 768px) {
        width: auto;
        margin: auto;  
    }
`