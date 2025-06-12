"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";

function NavScrollExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavClick = () => {
    setExpanded(false); // Close menu when nav item is clicked
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary fixed-top shadow-sm"
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container>
          {/* Logo and Brand */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <Image
              src="/images/logo.webp" // Replace with your logo path
              alt="Logo"
              width={110}
              height={50}
              className="me-2"
              style={{ objectFit: "contain" }}
            />
          </Navbar.Brand>

          {/* Custom Hamburger Toggle */}
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={handleToggle}
            className="border-0"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/" onClick={handleNavClick}>
                Home
              </Nav.Link>
              <Nav.Link href="/programmes" onClick={handleNavClick}>
                All Programmes
              </Nav.Link>
              <NavDropdown
                title="Certificate Programmes"
                id="navbarScrollingDropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item href="/tech" onClick={handleNavClick}>
                  Tech & IT Programmes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4" onClick={handleNavClick}>
                  Human Resource Management
                </NavDropdown.Item>
                <NavDropdown.Item href="/project" onClick={handleNavClick}>
                  Project Management Programmes
                </NavDropdown.Item>
                <NavDropdown.Item href="/operation" onClick={handleNavClick}>
                  Operation Management Programmes
                </NavDropdown.Item>
                <NavDropdown.Item href="/health" onClick={handleNavClick}>
                  Health & Safety Programmes
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="organisation" onClick={handleNavClick}>
                Organisation Programmes
              </Nav.Link>
            </Nav>

            {/* Search Form */}
            <Form className="d-flex mt-3 mt-lg-0">
              <Form.Control
                type="search"
                placeholder="Search courses..."
                className="me-2"
                aria-label="Search"
                size="sm"
              />

              <Button variant="outline-primary" size="sm">
                Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        /* Add top padding to body to account for fixed navbar */

        /* Logo hover effect */
        :global(.navbar-brand:hover) {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }

        /* Custom hamburger styling */
        :global(.navbar-toggler) {
          padding: 0.25rem 0.5rem;
          border: none !important;
          box-shadow: none !important;
        }

        :global(.navbar-toggler:focus) {
          box-shadow: none !important;
        }

        /* Smooth collapse animation */
        :global(.navbar-collapse) {
          transition: all 0.3s ease-in-out;
        }

        /* Custom dropdown styling */
        :global(.custom-dropdown .dropdown-menu) {
          border: none;
          box-shadow: none;
          border-radius: 0.375rem;
          margin-top: 0.5rem;
        }

        :global(.custom-dropdown .dropdown-item) {
          padding: 0.5rem 1rem;
          transition: background-color 0.2s ease;
        }

        :global(.custom-dropdown .dropdown-item:hover) {
          background-color: #f8f9fa;
          color: #0d6efd;
        }

        /* Mobile menu styling */
        @media (max-width: 991.98px) {
          :global(.navbar-collapse) {
            background-color: white;
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 0.375rem;
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          }

          :global(.navbar-nav .nav-link) {
            padding: 0.75rem 0;
            border-bottom: 1px solid #e9ecef;
          }

          :global(.navbar-nav .nav-link:last-child) {
            border-bottom: none;
          }

          :global(.custom-dropdown .dropdown-menu) {
            position: static !important;
            transform: none !important;
            box-shadow: none;
            border: 1px solid #e9ecef;
            margin-left: 1rem;
            margin-top: 0.5rem;
          }
        }

        /* Active nav link styling */
        :global(.nav-link.active),
        :global(.nav-link:hover) {
          color: #0d6efd !important;
        }

        /* Search form mobile adjustments */
        @media (max-width: 991.98px) {
          :global(.d-flex.mt-3) {
            margin-top: 1rem !important;
            padding-top: 1rem;
            border-top: 1px solid #e9ecef;
          }
        }
      `}</style>
    </>
  );
}

export default NavScrollExample;
