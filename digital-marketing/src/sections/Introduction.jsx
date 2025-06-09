import React from "react";
import { Container } from "react-bootstrap";
import "./Introduction.css";

export default function Introduction() {
  return (
    <section className="introduction-section">
      <Container className="text-center">
        <h1 className="introduction-title">
          Welcome to <span className="core-highlight">CORE</span> Production
        </h1>
        <p className="introduction-subtitle">
          We help brands grow through beautiful websites and smart digital strategies.{"\n"}
          From visual storytelling to high-performance SEO,{"\n"}
          we make sure your brand shows up and stands out.
        </p>
      </Container>
    </section>
  );
}
