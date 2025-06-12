"use client";

import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    name: "Emmanuel Nelson",
    text: "Piston and Fusion Academy transformed my career path. Highly recommend!",
    image: "/images/emmanuel.jpg",
  },
  {
    name: "David Benson",
    text: "The hands-on experience and mentoring here are unmatched.",
    image: "/images/david.jpg",
  },
  {
    name: "Mary Johnson",
    text: "Excellent courses with real-world applications.",
    image: "/images/mary.avif",
  },
  {
    name: "Michael Brown",
    text: "The best place to start or upscale your tech career.",
    image: "/images/michael.jpg",
  },
  {
    name: "Sarah Williams",
    text: "Their programs helped me land my dream job!",
    image: "/images/serah.avif",
  },
];

const logos = [
  "/images/british.webp",
  "/images/ferma.webp",
  "/images/kpmg.webp",
  "/images/lasaa.webp",
  "/images/navy.webp",
  "/images/nbc.webp",
  "/images/ncc.webp",
  "/images/npa.webp",
  "/images/netcom.webp",
  "/images/who.webp",
  "/images/worldbank.webp",
];

const Testimony: React.FC = () => {
  return (
    <section className="bg-light py-5 overflow-hidden gradient-bg text-white">
      <div className="container text-center">
        <h2 className=" mb-4">What Our Satisfied Clients Say</h2>

        <Carousel fade indicators={false} controls={true} className="mb-5">
          {testimonials.map((t, index) => (
            <Carousel.Item key={index}>
              <div className="p-4  text-light rounded shadow-sm d-flex flex-column align-items-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={100}
                  height={100}
                  className="rounded-circle mb-3 border border-3"
                  style={{ objectFit: "cover" }}
                />
                <p className="lead fst-italic text-light text-center w-75">
                  &quot;{t.text}&quot;
                </p>
                <h5 className="mt-3 fw-semibold">{t.name}</h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className=" mb-3 fs-4">Our Accredited Clients</div>

        <div className="logo-strip">
          <div className="logo-track">
            {logos.concat(logos).map((src, index) => (
              <div className="logo-item" key={index}>
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  width={100}
                  height={50}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #1e3c72, #2a5298, #3f5efb);
        }
        .logo-strip {
          overflow: hidden;
          position: relative;
          width: 100%;
          padding: 20px 0;
        }

        .logo-track {
          display: flex;
          width: calc(200% + 20px);
          animation: scroll 30s linear infinite;
        }

        .logo-item {
          flex: 0 0 auto;
          width: 150px;
          margin: 0 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimony;
