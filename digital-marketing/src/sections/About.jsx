import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <section className="py-5 bg-black text-white">
      <Container>
        <h2 className="about-title mb-4">ABOUT</h2>

        <p className="about-description mb-4">
          The CORE production team is a tight-knit crew of creatives, strategists, and doers who live and breathe bold ideas.
          We're all about smart thinking, clean execution, and making brands stand out in the loudest way possible.
          No fluff, no ego — just good energy, sharp work, and a shared love for what we do, from brainstorming wild
          concepts to landing the final pixel. We move fast, stay curious, and always keep it real.
        </p>

        <p className="text-center designer-credit">
          Designed by{" "}
          <a
            href="https://oabdelghany.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            Omar Abdelghany
          </a>
        </p>
      </Container>
    </section>
  );
}
