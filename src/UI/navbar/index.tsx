import styled from "styled-components";

/* Bootstrap */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function NavBarHeader({className}) {
    

    return (
    <Navbar variant="dark"> 
        <Container className={className}>
            <Nav style={{width:"365px"}} fill className="me-auto">
                <Nav.Link href="#home" onClick={() => {window.scroll(0, 200)}}>Inicio</Nav.Link>
                <Nav.Link href="#features" onClick={() => {window.scroll(0, 1100)}}>Sobre Mí</Nav.Link>
                <Nav.Link href="#pricing" onClick={() => {window.scroll(0, 20000)}} >Contacto</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );
  }

  export const NavbarStyled = styled(NavBarHeader)`
            width: 340px;
            margin: 0;
            @media screen and (max-width: 768px){
                width: 240px;
            }
`
