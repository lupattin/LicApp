/* Bootstrap */
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/* UI */

export function ModalSendEmail({show, handleClose}) {
 
  return (
    <Modal className='text-center' size='lg' /* style={{background:"rgb(163, 88, 88)"}} */ show={show} onHide={()=>{handleClose()}} centered>
        <Modal.Header >

          
          <Modal.Title style={{width:"100vw"}} className='text-center'>Completa tus datos.</Modal.Title>
          <CloseButton className='me-2' onClick={()=>{handleClose()}}></CloseButton>

        </Modal.Header>

        <Modal.Body>
      
        <Form>
          <Container>
              <Row>
                <Col >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                </Col>
                <Col >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email"  />
                </Form.Group>
                </Col>
                <Col >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Motivo de consulta.</Form.Label>
                  <Form.Control className='h-150' size='lg' as="textarea" placeholder="Enter email" />
                </Col>
              </Row>
          </Container>
        </Form>    
          
        </Modal.Body>
        
        <Modal.Footer style={{justifyContent:"center"}}>

        <Button size='lg' variant="success">Enviar</Button>

        </Modal.Footer>
    </Modal>
  );
}