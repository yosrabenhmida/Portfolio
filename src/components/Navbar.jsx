import React, { useState, useEffect } from "react";

const links = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) setActive(s.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        nav.navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 500;
          padding: 24px 60px;
          display: flex; align-items: center; justify-content: space-between;
          transition: background .4s, padding .4s, backdrop-filter .4s;
        }
        nav.navbar.scrolled {
          background: rgba(13,13,13,0.85);
          backdrop-filter: blur(16px);
          padding: 16px 60px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-logo {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.2rem;
          color: #fff; text-decoration: none; letter-spacing: -0.5px;
          cursor: none;
        }
        .nav-logo span { color: var(--o); }
        .nav-links { display: flex; gap: 4px; list-style: none; }
        .nav-links button {
          padding: 8px 18px; border-radius: 30px;
          font-size: 0.75rem; font-weight: 500; letter-spacing: 0.3px;
          text-transform: uppercase; color: rgba(255,255,255,0.45);
          background: none; border: 1px solid transparent; cursor: none;
          transition: all .2s;
        }
        .nav-links button:hover { color: #fff; border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.05); }
        .nav-links button.active { color: var(--o); border-color: rgba(232,68,10,0.4); background: rgba(232,68,10,0.08); }
        .nav-progress {
          position: fixed; top: 0; left: 0; height: 2px;
          background: var(--o); z-index: 600;
          transition: width .1s linear;
        }
        .nav-burger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: none; padding: 4px; }
        .nav-burger span { width: 24px; height: 1.5px; background: rgba(255,255,255,0.7); border-radius: 2px; transition: .3s; display: block; }
        .nav-mobile {
          position: fixed; inset: 0; background: var(--dark); z-index: 400;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 20px; transform: translateX(100%); transition: transform .4s cubic-bezier(.77,0,.175,1);
        }
        .nav-mobile.open { transform: translateX(0); }
        .nav-mobile button { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; background: none; border: none; color: rgba(255,255,255,0.5); cursor: none; transition: color .2s; }
        .nav-mobile button:hover, .nav-mobile button.active { color: var(--o); }
        @media(max-width:900px) {
          nav.navbar { padding: 20px 24px; }
          nav.navbar.scrolled { padding: 14px 24px; }
          .nav-links { display: none; }
          .nav-burger { display: flex; }
        }
      `}</style>

      <ProgressBar />

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a
          className="nav-logo"
          href="#home"
          onClick={() => handleClick("#home")}
        >
          YBH<span>.</span>
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.label}>
              <button
                className={active === l.href.slice(1) ? "active" : ""}
                onClick={() => handleClick(l.href)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span
            style={
              open ? { transform: "rotate(45deg) translate(4px,5px)" } : {}
            }
          />
          <span style={open ? { opacity: 0 } : {}} />
          <span
            style={
              open ? { transform: "rotate(-45deg) translate(4px,-5px)" } : {}
            }
          />
        </button>
      </nav>

      <div className={`nav-mobile${open ? " open" : ""}`}>
        {links.map((l) => (
          <button
            key={l.label}
            className={active === l.href.slice(1) ? "active" : ""}
            onClick={() => handleClick(l.href)}
          >
            {l.label}
          </button>
        ))}
      </div>
    </>
  );
}

function ProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setWidth(pct);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="nav-progress" style={{ width: width + "%" }} />;
}
