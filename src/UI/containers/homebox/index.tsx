import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw; 
    height: 110vh;
    margin: auto;
    position: relative;    
`
export const HomeParagraphCointainer = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row ;
    align-items: center;
    width: 50vw;
    height: 20vh;
    justify-content: space-evenly; 
    position: relative;
    
    @media (max-width: 1440px) {
          width:50vw
        }
    @media (max-width: 1024px) {
          width:70vw
        }
    @media (max-width: 768px) {
          width:80vw
        }
    @media (max-width: 425px) {
          width: 90vw
        }
`

export const HomeLogoContainer = styled.div`
    width: 40vw;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 1440px) {
          width:40vw
        }
    @media (max-width: 1024px) {
          width:45vw
        }
    @media (max-width: 768px) {
          width:50vw
        }
`