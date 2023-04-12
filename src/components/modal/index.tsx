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
      <p> La atención es presencial en Bariloche o digital desde cualquier lugar. </p>  
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
          Desde el punto de vista académico, podemos decir que soy licenciada en psicología, tengo el título de docente y también hice un posgrado en terapias psicoanalíticas para adultos. Lo cierto es que esto queda bastante corto a la hora de presentarme, ya que para llegar a donde estoy, mi recorrido fue mucho más extenso de lo que pueden dar cuenta los títulos académicos.

          Después de un largo período de vivir en la gran ciudad, tomé la decisión de volver a mi ciudad de origen, Bariloche, Argentina. Desde acá continúo mi formación profesional y personal, y acompaño a otras personas en sus procesos, habilitando la pregunta y la palabra como posibilitadoras de cambios. Mi perspectiva profesional contempla la integridad del sujeto, pensando los casos desde el paradigma de la complejidad, teniendo siempre una mirada humana y amorosa hacia mis pacientes.
        </p>
      </Modal.Body>
    </Modal>
  );
}
