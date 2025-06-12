"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

// Import slick CSS (add these to your _app.js or layout if not already imported)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    bgImage: "/images/wall.avif",
    sideImage: "/images/slide1.avif",
    title: "1st Class Learning, 5 Star Experience",
    description:
      "Step into a world of endless opportunities.Learn, grow, and lead with us.",
    buttonText: "Explore Courses",
  },
  {
    bgImage: "/images/bg2.avif",
    sideImage: "/images/slide.avif",
    title: "Master Skills with Expert-Led Courses",
    description:
      "Gain hands-on experience through interactive modules and get certified in industry-relevant standard skills.",
    buttonText: "Explore Certificate Courses",
  },
  {
    bgImage: "/images/bg3.avif",
    sideImage: "/images/slide2.jpg",
    title: " Organisational Courses For Your Team",
    description:
      "Empower your workforce with tailored training programs designed to drive performance and innovation.",
    buttonText: "Explore Organisational Courses",
  },
  {
    bgImage: "/images/bg4.avif",
    sideImage: "/images/slide4.avif",
    title: "Master the Art of Data Management",
    description:
      "Gain practical skills to organize, analyze, and secure data effectively with our comprehensive programme.",
    buttonText: "Data Management Programme",
  },
  {
    bgImage: "/images/bg5.avif",
    sideImage: "/images/slide5.avif",
    title: "The Piston Experience",
    description:
      "Discover a dynamic learning ecosystem where innovation meets inspiration. Connect, collaborate, and thrive with a global network of professionals and mentors.",
    buttonText: "The Piston Experience",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
  pauseOnHover: true,
  dotsClass: "slick-dots custom-dots",
};

export default function Hero() {
  return (
    <>
      <div className="heroWrapper">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div
                className="background"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <div className="overlay">
                  <Container>
                    <Row className="align-items-center">
                      <Col md={6} className="contentBox">
                        <div className="animate__animated animate__fadeInDown text-light head ">
                          {slide.title}
                        </div>
                        <p className="animate__animated animate__fadeInUp text-light des">
                          {slide.description}
                        </p>
                        <Button
                          className="animate__animated animate__fadeInUp "
                          variant="primary"
                        >
                          {slide.buttonText}
                        </Button>
                      </Col>
                      <Col md={6} className="imageBox">
                        <Image
                          src={slide.sideImage}
                          alt="slide"
                          width={600}
                          height={400}
                          className="img-fluid rounded ima"
                        />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .heroWrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: black;
        }

        .slide {
          height: 650px;
          position: relative;
        }

        .background {
          height: 100%;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.6);
          width: 100%;
          height: 100%;
          padding: 60px 20px;
          display: flex;
          align-items: center;
        }

        .contentBox {
          color: white;
          z-index: 2;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          padding-right: 20px;
        }
        .contentBox button {
          margin-top: 1rem;
        }

        .imageBox {
          z-index: 2;
          display: flex;
          justify-content: center;
        }

        /* Slick Dots Styling */
        :global(.slick-dots) {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex !important;
          justify-content: center;
          z-index: 10;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        :global(.slick-dots li) {
          margin: 0 5px;
        }

        :global(.slick-dots li button) {
          background: rgba(255, 255, 255, 0.4);
          border: none;
          border-radius: 50%;
          width: 12px;
          height: 12px;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        :global(.slick-dots li button:before) {
          content: "";
          display: none;
        }

        :global(.slick-dots li.slick-active button) {
          background: #0e5ed8;
          transform: scale(1.2);
        }

        :global(.slick-dots li button:hover) {
          background: rgba(255, 255, 255, 0.7);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .slide {
            height: 400px;
            min-height: 400px;
          }

          .overlay {
            flex-direction: column;
            padding: 30px 0px;
          }

          .contentBox {
            align-items: flex-start;
            padding: 0 20px;
          }

          .contentBox h2 {
            font-size: 1.5rem;
          }

          .contentBox p {
            font-size: 1rem;
          }

          :global(.slick-dots) {
            position: relative;
            bottom: auto;
            margin-top: 5px;
            transform: none;
            left: auto;
          }
        }
      `}</style>
    </>
  );
}
