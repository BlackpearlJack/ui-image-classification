"use client";

import { FaBell, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { Message } from "@/config/type";
import { useEffect, useState } from "react";

export const Navbar = () => {
  return (
    <div className="navbar glass px-6 py-2 shadow-md text-primary">
      {/* Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            aria-label="Navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center">
        <Link href="/" className="text-2xl sm:text-3xl font-semibold tracking-wide uppercase">
          N3UROTVG
        </Link>
      </div>

      {/* End */}
      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-circle focus:outline-none" aria-label="Search">
          <FaSearch className="w-5 h-5" />
        </button>
        <button className="btn btn-ghost btn-circle focus:outline-none" aria-label="Notifications">
          <div className="indicator">
            <FaBell className="w-5 h-5" />
            <span className="badge badge-xs badge-secondary rounded-full indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};


export const Alert= ({ content , type, duration, showLoader } : Message) => {
  const [visible, setVisible] = useState(true);
  const alertClass = `alert alert-${type}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); // Hide the alert after the duration
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [duration]);

  if (!visible) return null; // Do not render if not visible

  return (
    <div className="toast toast-top toast-end">
      <div className={alertClass}>
        {showLoader && <span className="loader mr-2"></span>} {/* Optional loader */}
        <span>{content}</span>
        <button
          className="btn btn-sm btn-circle btn-ghost ml-2"
          onClick={() => setVisible(false)} // Close the alert manually
          aria-label="Close alert"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
