"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaUserGraduate,
  FaBuilding,
  FaCertificate,
  FaChalkboardTeacher,
} from "react-icons/fa";

import type { ReactElement } from "react";

type CounterItem = {
  label: string;
  value: number;
  icon: ReactElement;
};

const counters: CounterItem[] = [
  {
    label: "Trained Students",
    value: 10000,
    icon: <FaUserGraduate size={30} />,
  },
  { label: "Corporate Clients", value: 200, icon: <FaBuilding size={30} /> },
  {
    label: "Certified Professionals",
    value: 2000,
    icon: <FaCertificate size={30} />,
  },
  {
    label: "Certified Trainers",
    value: 30,
    icon: <FaChalkboardTeacher size={30} />,
  },
];

const Counter: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298, #3f5efb)",
        color: "white",
        padding: "60px 0",
      }}
    >
      <div className="container text-center">
        <h3 className="mb-3  fs-2">More Impact, More Opportunity</h3>
        <p className="lead mb-5 desc">
          We are dedicated to transforming lives and organizations by equipping
          them with top-tier skills and certifications that make a real-world
          difference.
        </p>

        <div className="row justify-content-center">
          {counters.map((item, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div className="p-4 bg-white bg-opacity-10 rounded shadow-sm h-100">
                <div className="text-white mb-2">{item.icon}</div>
                <h2 className="fw-bold display-6">
                  {inView && (
                    <CountUp end={item.value} duration={2} separator="," />
                  )}
                </h2>
                <p className="mb-0">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
