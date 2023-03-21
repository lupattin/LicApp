import styled from "styled-components";


export const HeaderContainer = styled.div`
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items:center;
    top: -70px;
    position: relative;
    transition: transform 250ms;
    z-index: 1;
    &:hover {
        transform: translateY(70px);
        
    }
`
export const MenuContainer = styled.div`
    height: 70px;
    width: 100vw;
    position: relative;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 85px;
`