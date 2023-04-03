import "animate.css";
import styled from "styled-components";
import { useState } from "react";
/*Boostrap*/
import Nav from 'react-bootstrap/Nav';
 /*Components*/
 import { ModalSendEmail } from '@/components/modal/index';

function List ({className}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function scrolling (positionX, positionY){
        window.scroll(positionX, positionY)    
    }

    return (
        <>
        <ul className={className}>
            <li><Nav.Link className={className} onClick= {()=>{scrolling(0, 0)}}>Inicio</Nav.Link></li>
            <li><Nav.Link className={className} onClick= {()=>{ scrolling(0, 1050)}}>Sobre mi</Nav.Link></li>
            <li><Nav.Link className={className} onClick= {()=>{handleShow()}}>Agendar turno</Nav.Link></li>           
            <li><Nav.Link className={className} onClick= {()=>{ window.scroll(0, 2100)}}>Mas Info</Nav.Link></li>            
        </ul>
        <ModalSendEmail show={show} handleClose={handleClose}/>
        
        </>
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
    @media (max-width: 425px){
        font-size: 0.8rem;        
    }    
    @media (max-width: 768px) {
       width: 80%;
       font-size: 1.0rem; 
    }
    @media (max-width: 1024px) {
       width: 80%;
       font-size: 1.0rem;    
    }
    @media (max-width: 1440px) {
       width: 70%;
       font-size: 1.4rem;    
    }
    

`
