import React from "react";
export default function Menu() {
  return (
    <div className="container">
      <div className="menu-wrap d-flex align-items-center">
        <nav
          className="site-navigation text-left mr-auto  d-lg-block"
          role="navigation"
        >
          <ul className="site-menu main-menu ">
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Servicios
              </a>
            </li>

            <li>
              <a href="/" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="top-social ml-auto">
          <a href="#">
            <span className="icon-facebook"></span>
          </a>
          <a href="#">
            <span className="icon-twitter"></span>
          </a>
          <a href="#">
            <span className="icon-linkedin"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
