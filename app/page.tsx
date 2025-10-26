import "../app/globals.css";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-left">
          <img
            src="/logo.png"
            alt="Logo LGraziadei"
            width={64}
            height={64}
            className="site-logo"
          />
          <h1 className="site-title">LGraziadei</h1>
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

      <main className="hero" role="main">
        <div className="hero-content">
          <h2>Bem-vindo à minha landing page!</h2>
          <p>Esta é uma página mínima usando Next.js.</p>
          <img
            src="/loteamento.webp"
            alt="Vista do loteamento"
            width={420}
            height={320}
            className="hero-image"
          />
        </div>
      </main>
    </>
  );
}
