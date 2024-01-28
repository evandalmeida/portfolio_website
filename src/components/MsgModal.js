import Modal from 'react-bootstrap/Modal';
import "./CSS/footer.css"


export default function MsgModal({show, onHide}) {

  const handleClose = () => {
      onHide(); 
      window.location.reload(); 
    };
  
  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton >
        <Modal.Title>Thank you!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Message was successfully sent, I will get back to you shortly!</Modal.Body>
    </Modal>
  );
};