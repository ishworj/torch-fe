import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import AddPhotos from "../components/AddPhotos";
const UploadPhotos = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
     <>
       <MdOutlineAddPhotoAlternate size={26} onClick={handleShow} />

       <Modal show={show} onHide={handleClose} centered>
         <Modal.Header closeButton>
           <Modal.Title>Upload your Pics</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <AddPhotos/>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Close
           </Button>
           <Button variant="primary" onClick={handleClose}>
             Upload
           </Button>
         </Modal.Footer>
       </Modal>
     </>
   );
};

export default UploadPhotos;
