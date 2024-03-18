import React, { useState} from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import AppointmentForm from "./AppointmentForm";

const CallToAction = () => {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container className="p-3 text-center" id="landing">
      <div className="overlay"></div> {/* Overlay div */}
      <Container className="successText" style={{color:'black'}}>
        {showModal ? (
          <div>
            <h1 style={{ fontSize: '400%' }}>Start Today</h1>
            <p style={{ fontSize: '150%' }} className="fw-light">Boost your business with a sleek online presence.</p>
            <button
              className="btn fw-bold"
              style={{ backgroundColor: "#00cc00", border: '3px solid white' }}
              onClick={toggleModal}>
              Get a <b>FREE</b> Quote Now
            </button>
          </div>
        ) : (
          <AppointmentForm onClose={toggleModal} />)
        }
      </Container>
    </Container>
  );
};

export default CallToAction;
