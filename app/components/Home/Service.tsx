"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

// Type declaration
type ServiceItem = {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
};

const services: ServiceItem[] = [
  {
    image: "/images/slide1.avif",
    title: "Organisaton Programmes",
    subtitle: "Transform Teams with Strategic Organisational Courses",
    buttonText: "Learn More",
  },
  {
    image: "/images/slide2.jpg",
    title: "Certificate Programmes",
    subtitle: "Lead with Confidence through Our Management Courses ",
    buttonText: "Get Started",
  },
  {
    image: "/images/slide3.avif",
    title: "The Piston Experience",
    subtitle:
      "Experience Growth, Innovation, and Community at Piston and Fusion ",
    buttonText: "Explore",
  },
];

export default function Service() {
  return (
    <section
      style={{
        background: "linear-gradient(to right, #004e92, #000428)", // Blue gradient
        color: "#fff",
        padding: "60px  0",
      }}
    >
      <Container className=" ">
        <div className=" text-center deschead mb-3">
          Your Journey, Your Path with Piston and Fustion
        </div>
        <div className="mb-5 desc text-center text-md-center">
          Discover a world of possibilities with Piston and Fusion Academy.
          Whether you&apos;re just starting out or advancing your career, our
          community, environment, and expert-led programmes are designed to
          support your growth every step of the way.
        </div>

        <Row className=" justify-content-center">
          {/* Service 1 */}
          <Col xs={12} md={6} lg={5} className="mb-4 mb-md-0">
            <div className=" bg-light text-dark rounded text-left ">
              <Image
                src={services[0].image}
                alt={services[0].title}
                width={500}
                height={200}
                className="img-fluid  mb-3"
              />
              <div className="p-3">
                {" "}
                <div className="fs-4">{services[0].title}</div>
                <div className=" fs-5 mb-3">{services[0].subtitle}</div>
                <Button variant="outline-primary">
                  {services[0].buttonText}
                </Button>
              </div>
            </div>
          </Col>

          {/* Service 2 */}
          <Col xs={12} md={6} lg={5} className="mb-4 mt-4 mt-md-0 mb-md-0">
            <div className=" bg-light text-dark rounded text-left h-100">
              <Image
                src={services[1].image}
                alt={services[1].title}
                width={500}
                height={200}
                className="img-fluid mb-3"
              />
              <div className="p-3">
                <div className="fs-4">{services[1].title}</div>
                <div className="fs-5 mb-3">{services[1].subtitle}</div>
                <Button variant="outline-primary">
                  {services[1].buttonText}
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Service 3 */}
        <Row className="justify-content-center mt-0">
          <Col xs={12} md={6} lg={5} className="mt-4">
            <div className=" bg-light text-dark rounded text-left h-100">
              <Image
                src={services[2].image}
                alt={services[2].title}
                width={500}
                height={200}
                className="img-fluid mb-3 "
              />
              <div className="p-3">
                {" "}
                <h5>{services[2].title}</h5>
                <p>{services[2].subtitle}</p>
                <Button variant="outline-primary">
                  {services[2].buttonText}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <div className="justify-content-center align-items-center text-center mt-5 fs-1">
            <div>Explore Our Outstanding Programmes</div>
            <div>
              <a href="" className="btn btn-outline-primary text-light rounded">
                {" "}
                View All Programmes
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
