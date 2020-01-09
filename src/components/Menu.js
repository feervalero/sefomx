import React from "react";
import { Link } from 'react-router-dom';
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
              <Link to="/servicios" className="nav-link">
                Servicios
              </Link>
            </li>
            <li>
              <a href="/#QuienesSomos" className="nav-link">
                Quienes somos
              </a>
            </li>
            <li>
              <a href="/servicios#HeadHunter" className="nav-link">
                Headhunter
              </a>
            </li>
            <li>
              <a href="/servicios#CulturaOrganizacional" className="nav-link">
                Cultura Organizacional
              </a>
            </li>
            <li>
              <a href="/servicios#BienestarIntegral" className="nav-link">
                Evaluaciones de Bienestar Integral
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
