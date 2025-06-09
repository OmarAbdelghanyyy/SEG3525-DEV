import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Consult.css";

export default function Consult() {
  const navigate = useNavigate();

  return (
    <section className="consult-section text-center">
      <Container>
        <h2 className="consult-title mb-4">CONSULT WITH US</h2>
        <p className="mb-4">Ready to take the next step? Let’s work together.</p>
        <Button className="consult-button" size="lg" onClick={() => navigate("/consult")}>
          Start Consultation
        </Button>
      </Container>
    </section>
  );
}
