import Styled from "./styles";
import {Modal} from "react-bootstrap"
import Button from "../Button"

export const PopUpModal = ({setModal, title, content, buttons}) => {



    const handleClose = ()=> {
        setModal(false)
    }

 
  return (
    <Styled>
        <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'var(--gk-green)', fontWeight: "bold", fontSize: "25px"}}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>

            {buttons && buttons.map((item,index)=> <Button  setWidth="fit-content" onClick={item.onClick ? item.onClick : handleClose} key={index}>{item.title}</Button>  )}




        </Modal.Footer>
      </Modal>
    </Styled>
  );
};
