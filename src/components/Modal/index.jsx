import Styled from "./styles";
import { Modal } from "react-bootstrap";
import Button from "../Button";

export const PopUpModal = ({ setModal, title, content, buttons }) => {
  const handleClose = () => {
    setModal(false);
  };

  return (
    <Styled >
      <Modal show={true} onHide={handleClose} size="xl" scrollable>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: "var(--gk-green)",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          {buttons}
        </Modal.Footer>
      </Modal>
    </Styled>
  );
};
