/* Bootstrap */
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

/* UI */

import { ModalForm } from "@/UI/form";

export function ModalSendEmail({ show, handleClose }) {
  return (
    <Modal
      className="text-center"
      size="lg"
      show={show}
      onHide={() => {
        handleClose();
      }}
      centered
    >
      <Modal.Header>
        <Modal.Title style={{ width: "100vw" }} className="text-center">
          Completa tus datos.
        </Modal.Title>
        <CloseButton
          className="me-2"
          onClick={() => {
            handleClose();
          }}
        ></CloseButton>
      </Modal.Header>

      <Modal.Body>
        <ModalForm></ModalForm>
      </Modal.Body>
      <p> La atencion es presencial en Bariloche o digital desde cualquier lugar. </p>
    </Modal>
  );
}

export function ModalMoreInfo({ show, handleClose }) {
  return (
    <Modal
      className="text-center"
      size="lg"
      show={show}
      onHide={() => {
        handleClose();
      }}
      centered
    >
      <Modal.Header>
        <Modal.Title style={{ width: "100vw" }} className="text-center">
          Más sobre mi.
        </Modal.Title>
        <CloseButton
          className="me-2"
          onClick={() => {
            handleClose();
          }}
        ></CloseButton>
      </Modal.Header>

      <Modal.Body>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Modal.Body>
    </Modal>
  );
}
