import { useState } from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

/* SendGrid */

import { sendMail } from '@/lib/sendgrid';
import { AnyAaaaRecord } from 'dns';

export function ModalForm () {

    const [spinnerState, changeSpinnerState] = useState("none")
    const [childrenState, changeChildrenState] = useState("Enviar")

    const [alertSuccessState, changeAlertSuccessState] = useState("none")
    const [alertErrorState, changeAlertErrorState] = useState("none")

    /* async function prueba(){
       
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(false);
            }, 3000);
          }); 
      const resp = await myPromise
          
      return resp
    } */


    async function handleSubmit(event){
        event.preventDefault()

        const formData = {
            name: event.target.name.value,
            lastname: event.target.lastname.value,
            email : event.target.email.value,
            phone :  event.target.phone.value,
            argument :event.target.argument.value
        }    


        /* Change states from the button after sending form  */
        changeSpinnerState(" ")
        changeChildrenState("Enviando")

        /* Send Email and changes states of button and alerts*/



        const resp = await fetch("/api/sendmail", {
          method: "POST",
          body:JSON.stringify(formData)
          }) 
        const json = await resp.json() 
        console.log(json);
        
        if(json.resp == true){ 
            
            changeSpinnerState("none")
            changeChildrenState("Enviar")
            changeAlertSuccessState(" ")

            setTimeout(()=>{
                changeAlertSuccessState("none")
            },5000)
        }else{
            changeSpinnerState("none")
            changeChildrenState("Enviar")
            changeAlertErrorState(" ")

            setTimeout(()=>{
                changeAlertErrorState("none")
            },5000)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
          <Container>
              <Row>
                <Col >
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                </Col>
                <Col >
                <Form.Group className="mb-3" controlId="lastname">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col >
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email"  />
                </Form.Group>
                </Col>
                <Col >
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="argument">
                    <Form.Label>Motivo de consulta.</Form.Label>
                    <Form.Control className='h-150' size='lg' as="textarea" placeholder="Enter email" />
                  </Form.Group>
                </Col>
              </Row>

              <Container style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"10px 0 0 0", height:"120px", flexDirection:"column"}}>

              
              <Alert key={"success"} variant={"success"} style={{display:alertSuccessState}}>
               Se ha enviado correctamente el mail. Te responderemos a la brevedad. 
              </Alert>
              <Alert key={"danger"} variant={"danger"} style={{display:alertErrorState}}>
               Hubo un error en el envío. Por favor, volver a intentar mas tarde.
              </Alert>
              <Button  size='lg' variant="success" type='submit' >
                
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                style={{marginRight:"5px", display:spinnerState}}
                />
                {childrenState}
                
                </Button>
              </Container>
          </Container>
        </Form> 
    );
}