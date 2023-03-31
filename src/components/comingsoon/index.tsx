import styled from "styled-components";

export function ComingSoon() {
    
    return (
      <>
        <ComingSoonH5>Próximamente.</ComingSoonH5>
        <ComingSoonP>Más Contenido</ComingSoonP>
      </>
    );
  }


const ComingSoonH5 = styled.h5`
    font-size: 75px;
    @media screen and (max-width: 425px){
       font-size: 45px;
    }
`
const ComingSoonP = styled.p`
    font-size: 30px;
    @media screen and (max-width: 425px){
       font-size: 20px;
    }
`