/* Bootstrap */
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

/* UI */

import { ModalForm } from '@/UI/form';

export function ModalSendEmail({show, handleClose}) {
 
  return (
    <Modal className='text-center' size='lg' /* style={{background:"rgb(163, 88, 88)"}} */ show={show} onHide={()=>{handleClose()}} centered>
        <Modal.Header >

          
          <Modal.Title style={{width:"100vw"}} className='text-center'>Completa tus datos.</Modal.Title>
          <CloseButton className='me-2' onClick={()=>{handleClose()}}></CloseButton>

        </Modal.Header>

        <Modal.Body>
      
           <ModalForm ></ModalForm>
          
        </Modal.Body>
        
    </Modal>
  );
}