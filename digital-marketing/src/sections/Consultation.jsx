import React, { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Consultation.css";

export default function Consultation() {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const SERVICE_ID = 'service_9kzaxgz';
  const TEMPLATE_ID = "template_b1jr8se";
  const USER_ID = "MBebflZ6xCJD_L1kK";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        USER_ID)
      .then(
        () => {
          setStatus({ type: "success", message: "Your request for consultation was sent successfully!" });
          formRef.current.reset();
        },
        () => {
          setStatus({ type: "danger", message: "There was an error. Please try again." });
        }
      );
  };

  return (
    <section className="py-5 bg-black text-white min-vh-100">
      <Container>
      <div className="consult-header">
       <h2 className="consult-title">Request a Consultation</h2>
      <button className="close-consult" onClick={() => window.location.href = "/"}>
        &times;
        </button>
      </div>

        
        <Form ref={formRef} onSubmit={sendEmail} className="consult-form mx-auto">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="user_name" type="text" placeholder="Your name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="user_email" type="email" placeholder="Your email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>What service are you interested in?</Form.Label>
            <Form.Control name="user_service" type="text" placeholder="e.g., Branding, SEO..." />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Additional Info</Form.Label>
            <Form.Control name="message" as="textarea" rows={4} placeholder="Your message" />
          </Form.Group>

          <Button variant="info" type="submit">Submit</Button>
        </Form>

        {status.message && (
        <div className={`custom-alert ${status.type}`}>
         {status.message}
         </div>
)}

      </Container>
    </section>
  );
}
