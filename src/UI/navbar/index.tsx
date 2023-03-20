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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );
  }

  export const NavbarStyled = styled(NavBarHeader)`
            width: 340px;
            margin: 0;
`
