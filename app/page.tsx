"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [phone, setPhone] = useState("");
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
    handleScroll(); // Call once on mount

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

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;

    // Remove tudo que não é número
    input = input.replace(/\D/g, "");

    // Aplica a formatação (00) 00000-0000
    if (input.length <= 11) {
      input = input.replace(/^(\d{2})(\d)/g, "($1) $2");
      input = input.replace(/(\d{5})(\d)/, "$1-$2");
    }

    // Atualiza o estado com o valor formatado
    setPhone(input.substring(0, 15));
  };

  return (
    <>
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
            className={`floating-menu-nav ${
              isFloatingMenuOpen ? "is-open" : ""
            }`}
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
              href="https://wa.me/5555997351751"
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
              Terrenos amplos com vista privilegiada e próximos a áreas de
              lazer.
            </p>
            <a
              href="https://wa.me/5555997351751"
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
              Lotes comerciais e residenciais em localização estratégica com
              ótimo custo-benefício.
            </p>
            <a
              href="https://wa.me/5555997351751"
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
                  value={phone} // Conecta ao estado
                  onChange={handlePhoneChange} // Chama a função de máscara
                  minLength={3}
                  maxLength={15}
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
                const whatsappUrl = `https://wa.me/5555997351751?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
        <div id="sobre" className="body_description">
          <section className="sobre_section">
            {/* TEXTO */}
            <div className="sobre_texto">
              <h2>Uma visão que constrói legado</h2>

              <p>
                Sempre acreditei que urbanizar é um ato de responsabilidade
                histórica. O Empreendimento Graziadei nasce do compromisso com a
                legalidade, a transparência e o respeito ao território de Porto
                Xavier.
              </p>

              <p>
                Mais do que implantar infraestrutura, fiz questão de entregá-la
                de forma definitiva ao poder público, garantindo manutenção,
                segurança e benefícios permanentes à comunidade.
              </p>

              <p className="sobre_destaque">
                Empreendimento Graziadei — mais que um loteamento, um legado
                para Porto Xavier.
              </p>
            </div>

            {/* MAPA */}
            <div className="sobre_mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.381672248459!2d-55.1453315!3d-27.9073477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f8b900447d8695%3A0x641640422896fbf8!2sLoteamento%20Graziadei!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
        <footer className="site-footer">
          <div className="footer-content">
            <p className="footer-title">
              Empreendimento Graziadei — Porto Xavier / RS
            </p>

            <p className="footer-atendimento">
              Atendimento exclusivo em Porto Xavier. Pessoas de cidades vizinhas
              também podem adquirir terrenos no empreendimento.
            </p>

            <p className="footer-regioes">
              Região de interesse: Porto Xavier • Porto Lucena • Roque Gonzales
              • São Nicolau • Santo Cristo • Região das Missões
            </p>

            <p className="footer-direitos">
              © {new Date().getFullYear()} Empreendimento Graziadei. Todos os
              direitos reservados.
            </p>

            <p className="footer-dev">
              Desenvolvimento web por{" "}
              <a
                href="https://portfoliomaicongretschmann.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maicon Gretschmann — Desenvolvedor Front-end
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
