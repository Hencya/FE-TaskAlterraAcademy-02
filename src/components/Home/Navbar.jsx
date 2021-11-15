import React from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../../assets/img/logo-ALTA.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <div className="container-fluid px-5">
          <NavLink to="/" className="navbar-brand">
            <img src={logoNav} alt="logoNavbar" className="w-80" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
              <NavLink to="/" className="nav-link mx-3" replace>
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link mx-3" replace>
                About
              </NavLink>
              <NavLink to="/news" className="nav-link mx-3" replace>
                News
              </NavLink>
              <NavLink to="/contact-us" className="nav-link mx-3" replace>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
