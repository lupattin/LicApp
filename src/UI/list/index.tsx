import "animate.css";
import styled from "styled-components";
import Link from 'next/link'

function List ({className}) {
    return (
        <ul className={className}>
            <li><Link className={className} href=''>Inicio</Link></li>
            <li><Link className={className} href=''>Sobre mi</Link></li>
            <li><Link className={className} href=''>Agendar turno</Link></li>
            <li><Link className={className} href=''>Contacto</Link></li>
            <li><Link className={className} href=''>Mas Info</Link></li>            
        </ul>
    );
}


export const FooterList = styled(List)`
    display: flex;    
    flex-direction: column;
    text-decoration: none;
    color: #efd3ea;    
    width: 50%;
    list-style: circle;    
    font-size: 1rem;    
    cursor: pointer;
    @media (max-width: 769px) {
       width: 100%;
       font-size: 1.0rem; 
    }
    @media (max-width: 1024px) {
       width: 80%;
       font-size: 1.3rem;    
    }
`
