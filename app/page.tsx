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
        <div className="rua_1">
          <img src="/rua1.webp" alt="Vista da Rua 1" className="rua_img" />
          <h2>Rua das Palmeiras</h2>
          <p>
            Lotes residenciais com excelente localização, área verde e
            infraestrutura completa.
          </p>
          <a
            href="https://wa.me/5500000000000"
            className="whats_button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp-ico.svg"
              alt="WhatsApp"
              className="whats_icon"
            />
            Mais detalhes
          </a>
        </div>
        <div className="rua_2">
          <img src="/rua2.webp" alt="Vista da Rua 2" className="rua_img" />
          <h2>Rua dos Ipês</h2>
          <p>
            Terrenos amplos com vista privilegiada e próximos a áreas de lazer.
          </p>
          <a
            href="https://wa.me/5500000000000"
            className="whats_button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp-ico.svg"
              alt="WhatsApp"
              className="whats_icon"
            />
            Mais detalhes
          </a>
        </div>
        <div className="rua_3">
          <img src="/rua3.webp" alt="Vista da Rua 3" className="rua_img" />
          <h2>Rua das Aroeiras</h2>
          <p>
            Lotes comerciais e residenciais em localização estratégica com ótimo
            custo-benefício.
          </p>
          <a
            href="https://wa.me/5500000000000"
            className="whats_button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp-ico.svg"
              alt="WhatsApp"
              className="whats_icon"
            />
            Mais detalhes
          </a>
        </div>
      </div>

      <div className="body_chat">
        <div className="home_form"></div>
      </div>
      <div className="body_description"></div>
    </main>
  );
}
