import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
      Mostrar navegación
    </a>
    <a className="mobile-btn" href="#" title="Hide navigation">
      Esconder navegación
    </a>
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          Acerca
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#resume">
          Resumen
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#portfolio">
          Trabajos
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#testimonials">
          Testimonios
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#contact">
          Contacto
        </a>
      </li>
    </ul>{" "}
    {/* end #nav */}
  </nav>{" "}
  {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Soy David San Luis</h1>
      <h3>
        Soy un <span>programador web</span>,{" "}
        amante de la filosofia  Let's{" "}
        <a className="smoothscroll" href="#about">
          start scrolling
        </a>
        aprende mas{" "}
        <a className="smoothscroll" href="#about">
          acerca de mi
        </a>
        .
      </h3>
      <hr />
      <ul className="social">
        <li>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/david-san-luis-aguirre-263b95163">
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
        </li>
        </li>
      </ul>
    </div>
  </div>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about">
      <i className="icon-down-circle" />
    </a>
  </p>
</header>
    )
  }
}