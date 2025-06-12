"use client";

import React from "react";
import Image from "next/image";

const partnerLogos = [
  { src: "/images/pmi.webp", alt: "Partner 1" },
  { src: "/images/scrum.webp", alt: "Partner 2" },
  { src: "/images/pmi.webp", alt: "Partner 3" },
  { src: "/images/scrum.webp", alt: "Partner 4" },
  { src: "/images/pmi.webp", alt: "Partner 5" },
];

const Partners = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #007CF0, #00DFD8)",
        color: "#fff",
      }}
    >
      <div className="container">
        {/* Subheading */}

        <div className="row align-items-center mb-5">
          {/* Text Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className=" text-start mb-4">Our Impact Across Africa</h2>

            <p className="lead">
              Piston and Fusion Academy proudly partners with institutions and
              professionals across multiple countries in Africa. Through our
              collaborations, we empower individuals and organizations with
              industry-relevant skills, helping them grow and succeed.
            </p>
          </div>

          {/* Map Image */}
          <div className="col-md-6 text-center">
            <Image
              src="/images/map.svg"
              alt="Map of Africa"
              width={500}
              height={500}
              className="img-fluid"
            />
          </div>
        </div>

        {/* Partner Logos */}
        <div className="row justify-content-center align-items-center g-4">
          {partnerLogos.map((logo, index) => (
            <div className="col-4 col-sm-2 text-center" key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={60}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
