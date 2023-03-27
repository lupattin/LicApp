import "animate.css";
import styled from "styled-components";
import Link from 'next/link'

function List ({className}) {
    return (
        <ul className={className}>
            <li><Link style={{color: "#efd3ea"}} href=''>Inicio</Link></li>
            <li><Link href=''>Sobre mi</Link></li>
            <li><Link href=''>Agendar turno</Link></li>
            <li><Link href=''>Contacto</Link></li>
            <li><Link href=''>Mas Info</Link></li>            
        </ul>
    );
}


export const FooterList = styled(List)`
    text-decoration: none;
    color: #efd3ea;    
    width: 50%;
    list-style: circle;    
    font-size: 1rem;    
    cursor: pointer;
    @media (max-width: 728px) {
       width: 100%;
    }
    @media (max-width: 1024px) {
       width: 80%;
       font-size: 0.9rem;    
    }
`
