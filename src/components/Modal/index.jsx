import Styled from "./styles";
import {Modal, Button} from "react-bootstrap"
import {useState} from 'react'

export const PopUpModal = ({setModal, title, content, buttons}) => {



    const handleClose = ()=> {
        setModal(false)
    }

 
  return (
    <Styled>
        <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>

            {buttons && buttons.map((item,index)=> <button onClick={item.onClick ? item.onClick : handleClose} key={index}>{item.title}</button>  )}




        </Modal.Footer>
      </Modal>
    </Styled>
  );
};
