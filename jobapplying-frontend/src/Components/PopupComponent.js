import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



const PopupComponent = ({ children, onConfirm, isOpen, setIsOpen }) => {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setIsOpen(true)}>
        Edit
      </Button> */}
    

      <Modal show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Apply Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          {children && children}
        </Modal.Body>
        <Modal.Footer>
         <Button variant="primary" type="submit" onClick={()=> {
            onConfirm();
            setIsOpen(false);
            }}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupComponent;
