import styled from "styled-components";

/* Bootstrap */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
            
export function NavLink ({className, positionX, positionY, children }:any){
    
        return(
            <Nav.Link className={className} onClick={()=>{ window.scroll(positionX, positionY) }}> {children}</Nav.Link>
        )
}

export const NavLinkStyled = styled(NavLink)`
     @media (max-width: 425px) {        
         font-size: 13px;
    }
`

export function NavBarHeader({className}) {
    

    return (
    <Navbar variant="dark" >
        <Container className={className}>      
                <Nav style={{width:"365px"}} fill className="me-auto">
                    <NavLinkStyled positionX={0} positionY={0}>Inicio</NavLinkStyled>
                    <NavLinkStyled positionX={0} positionY={1050}>Sobre Mí</NavLinkStyled>
                    <NavLinkStyled positionX={0} positionY={20000}>Contacto</NavLinkStyled>
                </Nav>
        </Container>
    </Navbar>
    );
  }

  export const NavbarStyled = styled(NavBarHeader)`
            width: 340px;
            margin: 0;
            @media screen and (max-width: 768px){
                width: 320px;
            }
            @media screen and (max-width: 425px){
                width: 225px;
                margin-left: 50px;
            }
            @media screen and (max-width: 375px){
                width: 225px;
                margin-left: 25px;
            }
`