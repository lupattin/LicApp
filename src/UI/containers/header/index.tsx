import styled from "styled-components";


export const HeaderContainer = styled.div`
    height: 170px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items:center;
    top: -105px;
    position: fixed;
    transition: transform 250ms;
    z-index: 2;
    &:hover {
        transform: translateY(105px);
    }
    `
export const MenuContainer = styled.div`
    height: 105px;
    width: 100vw;
    position: relative;
    background-color: #808080d4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 140px;
    @media screen and (max-width: 768px){
        padding: 0px 65px;
    }
    `