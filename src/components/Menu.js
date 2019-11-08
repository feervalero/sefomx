import React from "react";
export default function Menu() {
  return (
    <div class="container">
      <div class="menu-wrap d-flex align-items-center">
        <nav
          class="site-navigation text-left mr-auto  d-lg-block"
          role="navigation"
        >
          <ul class="site-menu main-menu ">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#servicios" className="nav-link">
                Servicios
              </a>
            </li>

            <li>
              <a href="#contactanos" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div class="top-social ml-auto">
          <a href="#">
            <span class="icon-facebook"></span>
          </a>
          <a href="#">
            <span class="icon-twitter"></span>
          </a>
          <a href="#">
            <span class="icon-linkedin"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
