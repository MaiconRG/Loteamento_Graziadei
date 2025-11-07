"use client";

import { useState, useEffect } from "react";
import "../app/globals.css";

export default function Home() {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".site-header");
      if (header) {
        const headerBottom = header.getBoundingClientRect().bottom;
        setShowFloatingMenu(headerBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHeaderMenu = () => {
    setIsHeaderMenuOpen(!isHeaderMenuOpen);
    // Garante que o menu flutuante está fechado quando abrir o menu do header
    setIsFloatingMenuOpen(false);
  };

  const toggleFloatingMenu = () => {
    setIsFloatingMenuOpen(!isFloatingMenuOpen);
    // Garante que o menu do header está fechado quando abrir o menu flutuante
    setIsHeaderMenuOpen(false);
  };

  return (
    <main>
      {/* Menu Flutuante */}
      <div className={`floating-menu ${showFloatingMenu ? "show" : ""}`}>
        <button
          className="floating-menu-toggle"
          onClick={toggleFloatingMenu}
          aria-expanded={isFloatingMenuOpen}
          aria-label="Menu flutuante"
        >
          <span className="menu-icon"></span>
        </button>
        <nav
          className={`floating-menu-nav ${isFloatingMenuOpen ? "is-open" : ""}`}
        >
          <a
            className="nav-link"
            href="#terrenos"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("terrenos")
                ?.scrollIntoView({ behavior: "smooth" });
              setIsFloatingMenuOpen(false);
            }}
          >
            Terrenos
          </a>
          <a
            className="nav-link"
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" });
              setIsFloatingMenuOpen(false);
            }}
          >
            Contato
          </a>
          <a
            className="nav-link"
            href="#sobre"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("sobre")
                ?.scrollIntoView({ behavior: "smooth" });
              setIsFloatingMenuOpen(false);
            }}
          >
            Sobre
          </a>
        </nav>
      </div>

      <header className="site-header">
        <div className="logo">
          <img src="/logo.svg" alt="Logo LGraziadei" className="site-logo" />
        </div>

        <button
          className="menu-toggle"
          onClick={toggleHeaderMenu}
          aria-expanded={isHeaderMenuOpen}
          aria-label="Menu principal"
        >
          <span className="menu-icon"></span>
        </button>

        <nav
          className={`header-right ${isHeaderMenuOpen ? "is-open" : ""}`}
          aria-label="Menu principal"
        >
          <a
            className="nav-link"
            href="#terrenos"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("terrenos")
                ?.scrollIntoView({ behavior: "smooth" });
              setIsHeaderMenuOpen(false); // Fecha o menu mobile após clicar
            }}
          >
            Terrenos
          </a>
          <a
            className="nav-link"
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" });
              setIsHeaderMenuOpen(false); // Fecha o menu mobile após clicar
            }}
          >
            Contato
          </a>
          <a
            className="nav-link"
            href="#sobre"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("sobre")
                ?.scrollIntoView({ behavior: "smooth" });
              setIsHeaderMenuOpen(false); // Fecha o menu mobile após clicar
            }}
          >
            Sobre
          </a>
        </nav>
      </header>
      <div id="terrenos" className="body_lote">
        <div className="rua_1">
          <img src="/rua1.webp" alt="Vista da Rua 1" className="rua_img" />
          <h2>Rua Da Defesa Civil</h2>
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
          <h2>Rua Travessa Dom Pedro I</h2>
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
          <h2>Rua Ida Laura Graziadei</h2>
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

      <div id="contato" className="body_chat">
        <div className="home_form">
          <h2 className="form_title">Solicite mais informações</h2>
          <div className="form_columns">
            <div className="form_field">
              <label htmlFor="name">
                Nome Completo <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome completo"
                className="form_input"
                required
                minLength={3}
              />
            </div>
            <div className="form_field">
              <label htmlFor="phone">
                Telefone <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="(00) 00000-0000"
                className="form_input"
                required
                pattern="^\(\d{2}\) \d{5}-\d{4}$"
                title="Digite o telefone no formato (00) 00000-0000"
              />
            </div>
            <div className="form_field">
              <label htmlFor="interest">
                Área de Interesse <span className="required">*</span>
              </label>
              <select id="interest" className="form_input" required>
                <option value="">Selecione a rua de interesse</option>
                <option value="Rua das Palmeiras">Rua das Palmeiras</option>
                <option value="Rua dos Ipês">Rua dos Ipês</option>
                <option value="Rua das Aroeiras">Rua das Aroeiras</option>
              </select>
            </div>
          </div>
          <button
            className="form_submit"
            onClick={() => {
              const nameInput = document.getElementById(
                "name"
              ) as HTMLInputElement;
              const phoneInput = document.getElementById(
                "phone"
              ) as HTMLInputElement;
              const interestInput = document.getElementById(
                "interest"
              ) as HTMLSelectElement;

              // Dispara a validação nativa do HTML5
              if (!nameInput.checkValidity()) {
                nameInput.reportValidity();
                return;
              }
              if (!phoneInput.checkValidity()) {
                phoneInput.reportValidity();
                return;
              }
              if (!interestInput.checkValidity()) {
                interestInput.reportValidity();
                return;
              }

              const name = nameInput.value;
              const phone = phoneInput.value;
              const interest = interestInput.value;

              const message = `Olá! Me chamo ${name}. Gostaria de mais informações sobre os terrenos na ${interest}. Meu telefone para contato é ${phone}.`;
              const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            Enviar Mensagem
          </button>
        </div>
      </div>
      <div id="sobre" className="body_description"></div>
    </main>
  );
}
