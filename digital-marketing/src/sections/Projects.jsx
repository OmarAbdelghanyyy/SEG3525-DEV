import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./Projects.css";
import underconstruction_img from '../assets/underconstruction.jpg';

const projects = [
  { title: "Project 1", image: underconstruction_img },
  { title: "Project 2", image: underconstruction_img },
  { title: "Project 3", image: underconstruction_img },
  { title: "Project 4", image: underconstruction_img },
  { title: "Project 5", image: underconstruction_img },
  { title: "Project 6", image: underconstruction_img },
  { title: "Project 7", image: underconstruction_img },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const scrollId = useRef();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += 1;

      if (
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
        scrollContainer.scrollWidth - 1
      ) {
        scrollContainer.scrollLeft = 0;
      }

      scrollId.current = requestAnimationFrame(scroll);
    };

    scrollId.current = requestAnimationFrame(scroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scrollContainer.scrollLeft = 0;
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(scrollId.current);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section className="py-5 bg-black text-white" ref={containerRef}>
      <Container>
        <h2 className="text-center mb-4 projects-title">PROJECTS</h2>
        <div ref={scrollRef} className="project-scroll-container d-flex px-2">
          {[...projects, ...projects].map((project, idx) => (
            <a
              key={idx}
              className="project-scroll-item"
              href="/under-construction.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={project.title} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
