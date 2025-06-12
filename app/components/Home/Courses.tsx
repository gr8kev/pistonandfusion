"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    image: "/images/slide.avif",
    category: "Business",
    title: "Project Management",
    description: "Master the tools and techniques to lead successful projects.",
    link: "/courses/project-management",
  },
  {
    id: 2,
    image: "/images/slide1.avif",
    category: "Business",
    title: "Business Writing",
    description:
      "Learn how to write a professional business plan that will help you attract investors and stakeholders.",
    link: "/courses/writing",
  },
  {
    id: 3,
    image: "/images/slide.avif",
    category: "Leadership",
    title: "Organisational Development",
    description: "Strengthen team performance and workplace culture.",
    link: "/courses/organisational-development",
  },
  {
    id: 4,
    image: "/images/about.avif",
    category: "Finance",
    title: "Financial Literacy",
    description: "Understand budgeting, investing, and financial planning.",
    link: "/courses/financial-literacy",
  },
  {
    id: 5,
    image: "/images/bg2.avif",
    category: "Marketing",
    title: "Digital Marketing",
    description: "Boost brand presence and reach through digital channels.",
    link: "/courses/digital-marketing",
  },
  {
    id: 6,
    image: "/images/bg2.jpg",
    category: "Tech",
    title: "Software Development",
    description: "Build robust applications using modern technologies.",
    link: "/courses/software-development",
  },
  {
    id: 7,
    image: "/images/bg3.avif",
    category: "Productivity",
    title: "Time Management",
    description: "Enhance your focus, efficiency, and task control.",
    link: "/courses/time-management",
  },
  {
    id: 8,
    image: "/images/bg4.avif",
    category: "Design",
    title: "Data Analytics",
    description: "Unlock in datasights from to drive decision-making.",
    link: "/courses/ux-ui-design",
  },
  {
    id: 9,
    image: "/images/bg5.avif",
    category: "Communication",
    title: "Public Speaking",
    description: "Communicate ideas clearly and confidently.",
    link: "/courses/public-speaking",
  },
];

export default function Courses() {
  return (
    <section className="gradient-section text-white py-5">
      <Container>
        <div className="mb-4 text-start fw-normal fs-2 ">
          Trending Certificate Programmes
        </div>
        <Row>
          {courses.map((course) => (
            <Col
              key={course.id}
              lg={4}
              md={6}
              sm={12}
              className="mb-4 d-flex align-items-stretch"
            >
              <Link href={course.link} passHref>
                <div className="course-card  bg-white text-dark rounded shadow-sm w-100 hover-effect">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="img-fluid rounded mb-3"
                  />
                  <div className="p-3">
                    <p className="text-muted mb-1">{course.category}</p>
                    <h2 className="h5 mb-2">{course.title}</h2>
                    <p className="text-muted">{course.description}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{``}</style>
    </section>
  );
}
