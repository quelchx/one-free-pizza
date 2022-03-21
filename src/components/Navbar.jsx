import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span className="fs-4 logo hfx-waterfall">One Free Pizza</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/" className="nav-link hfx-shimmy" aria-current="page">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/get-your-pizza" className="nav-link hfx-shimmy">
            Pizza
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/orders" className="nav-link hfx-shimmy">
            Orders
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
