"use client";

import { useState } from "react";
import "../app/globals.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <header className="site-header">
        <div className="logo">
          <img src="/logo.svg" alt="Logo LGraziadei" className="site-logo" />
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Menu principal"
        >
          <span className="menu-icon"></span>
        </button>

        <nav
          className={`header-right ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Menu principal"
        >
          <a
            className="nav-link"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terrenos
          </a>
          <a
            className="nav-link"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
          <a
            className="nav-link"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sobre
          </a>
        </nav>
      </header>
      <div className="body_lote">
        <div className="rua_1"></div>
        <div className="rua_2"></div>
        <div className="rua_3"></div>
      </div>

      <div className="body_chat">
        <div className="home_form"></div>
      </div>
      <div className="body_description"></div>
    </main>
  );
}
