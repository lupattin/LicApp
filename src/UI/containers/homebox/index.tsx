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
    width: 50vw;
    height: 20vh;
    justify-content: space-evenly; 
    position: relative;
    
    @media (max-width: 1440px) {
          width:60vw
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
    width: 50vw;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 1440px) {
          width:55vw
        }
    @media (max-width: 1024px) {
          width:60vw
        }
    @media (max-width: 768px) {
          width:65vw
        }
`