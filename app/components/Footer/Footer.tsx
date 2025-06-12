import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import Image from "next/image";

import {
  socialLinks,
  quickLinks,
  contactLinks,
  addresses,
  legalLinks,
} from "../data/footerData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-light pt-5 pb-4">
      <Container>
        <Row className="mb-5">
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-4 footer-head">Socials</h5>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-4 footer-head">Quick Links</h5>
            <ul className="list-unstyled footer-c">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link
                    href={link.href}
                    className="text-light text-decoration-none"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-4 footer-head">Contacts</h5>
            <ul className="list-unstyled footer-c">
              {contactLinks.map((contact, index) => (
                <li key={index} className="mb-3">
                  <a
                    href={contact.href}
                    className="text-light text-decoration-none"
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-4 footer-head">Address</h5>
            <ul className="list-unstyled footer-c">
              {addresses.map((address, index) => (
                <li key={index} className="mb-3">
                  {address}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center mb-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center">
              <Link
                href="/"
                className="navbar-brand  d-flex align-items-center"
              >
                <Image
                  src="/images/logo.webp"
                  alt="CCH Foundation Logo"
                  width={150}
                  height={60}
                  priority
                />
              </Link>
            </div>
          </Col>

          <Col lg={6} className="text-lg-start ">
            <div className="footer-c right">
              @{currentYear} PistonandFusion. All rights reserved.
            </div>
            <div className="mt-3">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={link.href}
                    className="text-decoration-underline footer-c "
                  >
                    {link.text}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="mx-2 footer-c">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Col>
        </Row>

        <hr className=" my-0 hr" />
      </Container>
    </footer>
  );
};

export default Footer;
