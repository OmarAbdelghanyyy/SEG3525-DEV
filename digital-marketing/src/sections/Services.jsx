import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const services = [
  {
    title: "BRANDING",
    description:
      "In the digital landscape, your brand is your first impression. We go beyond surface-level aesthetics to build brands that speak volumes. We develop comprehensive branding strategies that reflect your core values, fostering authentic connections and driving meaningful engagement. Let us help your brand leave a lasting, impactful footprint.",
  },
  {
    title: "DIGITAL MEDIA",
    description:
      "Digital media is a dynamic landscape where innovation meets connection. We stay ahead of trends, crafting compelling narratives and engaging content that resonates with your audience. From reels to interactive experiences, we help tell your brand’s story in ways that matter.",
  },
  {
    title: "SEO STRATEGY",
    description:
      "We optimize your online presence to ensure you’re found at the right moment. Our SEO strategies go beyond keywords to focus on user intent, page performance, and lasting discoverability.",
  },
  {
    title: "WEB DESIGN",
    description:
      "We design responsive, elegant websites that perform across all devices. Our focus is usability, performance, and design cohesion that reflects your brand identity in every click.",
  },
];

export default function Services() {
  return (
    <section className="service-section">
      <Container>
        <h2 className="service-heading">OUR SERVICES</h2>

        {services.map((service, idx) => (
          <div key={idx} className="service-block">
            <Row className="align-items-start">
              <Col md={4}>
                <h3 className="service-title">{service.title}</h3>
              </Col>
              <Col md={8}>
                <p className="service-description">{service.description}</p>
              </Col>
            </Row>
          </div>
        ))}

        <div className="border-top border-light mt-4" />
      </Container>
    </section>
  );
}
