import "../app/globals.css";

export default function Home() {
  return (
    <html>
      <body className="hero" role="main">
        <header className="site-header">
          <div className="logo">
            <img src="/logo.svg" alt="Logo LGraziadei" className="site-logo" />
          </div>

          <nav className="header-right" aria-label="Menu principal">
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
        <div className="body_lote"></div>
        <div className="body_chat">
          <div className="home_form"></div>
        </div>
        <div className="body_description"></div>
      </body>
    </html>
  );
}
