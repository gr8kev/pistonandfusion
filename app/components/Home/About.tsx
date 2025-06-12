"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";

export default function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-content");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight - 100) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>About Us - Piston and Fusion Academy</title>
        <meta
          name="description"
          content="Learn about Piston and Fusion Academy - your premier destination for professional training and skill development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="about-page">
        <Container className="py-5">
          <Row className="align-items-center min-vh-100 flex-column-reverse flex-lg-row">
            {/* Content Section */}
            <Col lg={6} className="content-section" id="about-content">
              <div className={`content-wrapper ${animate ? "fade-in-up" : ""}`}>
                <h1 className="display-4 text-white mb-4">
                  About Piston and Fusion Academy
                </h1>

                <div className="content-text">
                  <p className=" text-white mb-4">
                    At Piston and Fusion Academy, we are dedicated to empowering
                    individuals with cutting-edge skills and knowledge that
                    drive success in today&apos;s rapidly evolving professional
                    landscape.
                  </p>

                  <p className="text-white mb-4">
                    Founded with a vision to bridge the gap between traditional
                    education and industry demands, our academy offers
                    comprehensive training programs designed by industry
                    experts.
                  </p>
                </div>

                <Button variant="primary" size="lg" className="read-more-btn ">
                  Get Started
                </Button>
              </div>
            </Col>

            {/* Image Section */}
            <Col lg={6} className="image-section">
              <div
                className={`image-wrapper ${animate ? "fade-in-right" : ""}`}
              >
                <Image
                  src="/images/about.avif"
                  alt="Piston and Fusion Academy Training"
                  width={600}
                  height={500}
                  className="img-fluid rounded shadow-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .about-page {
          background: linear-gradient(to right, #003366, #0f52ba);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .about-page::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 50%,
            rgba(255, 255, 255, 0.1) 100%
          );
          pointer-events: none;
        }

        .content-wrapper {
          padding: 2rem 0;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-right {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        .content-section h1 {
          position: relative;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .content-section h1::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.5));
          border-radius: 2px;
        }

        .content-text p {
          line-height: 1.8;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-size: 1.1rem;
        }

        .read-more-btn {
          background: linear-gradient(45deg, #fff, #f8f9fa);
          border: none;
          color: #fff !important;
          font-weight: 600;
          padding: 12px 30px;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .read-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          background: linear-gradient(45deg, #f8f9fa, #e9ecef);
          color: #fff;
        }

        .image-section {
          position: relative;
          z-index: 2;
        }

        .image-wrapper {
          position: relative;
          transform: translateX(30px);
          opacity: 0;
          transition: all 0.8s ease-out;
        }

        .image-wrapper:hover {
          transform: scale(1.02);
        }

        .image-wrapper::before {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          border-radius: 15px;
          z-index: -1;
        }

        @media (max-width: 991.98px) {
          .about-page {
            padding: 2rem 0;
          }

          .content-section {
            text-align: center;
            margin-top: 3rem;
          }

          .image-section {
            margin-bottom: 3rem;
          }

          .content-section h1 {
            font-size: 2.5rem;
          }

          .content-section h1::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .image-wrapper {
            transform: none;
          }

          .image-wrapper:hover {
            transform: scale(1.02);
          }
        }

        @media (max-width: 767.98px) {
          .content-section h1 {
            font-size: 2rem;
          }

          .content-text p {
            font-size: 1rem;
          }

          .read-more-btn {
            padding: 10px 25px;
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
