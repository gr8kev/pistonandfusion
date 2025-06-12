"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const blogPosts = [
  {
    image: "/images/project1.avif",
    title: "Project Management",
    excerpt:
      "Master the art of planning, executing, and closing projects effectively.",
  },
  {
    image: "/images/business.avif",
    title: "Business Development",
    excerpt: "Unlock growth strategies and partnerships that drive success.",
  },
  {
    image: "/images/customer.avif",
    title: "Customer Management",
    excerpt:
      "Enhance client relationships and boost retention through proven techniques.",
  },
];

const Blog: React.FC = () => {
  return (
    <section
      className="py-5  text-white text-left"
      style={{
        background:
          "linear-gradient(135deg, #0B1F3A 0%, #13294B 50%, #1E3A5F 100%)",
      }}
    >
      <div className="container">
        <h2 className="mb-3 ">📰 From Our Blog</h2>
        <p className="mb-5 text-light">
          ✏️ Get the latest insights, stories, and strategies in project,
          business, and all our programmes.
        </p>

        <div className="row g-4 mb-5 ">
          {blogPosts.map((post, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="card-img-top object-fit-cover"
                />
                <div className="card-body   ">
                  <h5 className="card-title ">{post.title}</h5>
                  <p className="card-text text-muted">{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/blog" className="btn btn-outline-primary  btn-lg  ">
            Go to Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
