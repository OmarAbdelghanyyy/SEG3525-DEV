import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FaFacebookF, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="custom-footer text-center">
      <Container>
        <Row className="mb-3">
          <Col md={4}>
            <p className="footer-contact">CONTACT@CONTACT.COM</p>
          </Col>
          <Col md={4}>
            <p className="footer-contact">+201203308444</p>
          </Col>
          <Col md={4} className="footer-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-copy">2025 ALL RIGHTS RESERVED CORE productions</p>
            <p className="footer-location">NEW CAIRO, CAIRO, EGYPT.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
