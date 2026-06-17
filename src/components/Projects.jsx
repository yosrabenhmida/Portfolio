import React, { useState, useRef, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Gestion Immobilière",
    category: "Full-Stack",
    year: "2025",
    desc: "API REST sécurisée pour la gestion de biens immobiliers. Authentification JWT, gestion des rôles (admin/agent/client), upload de photos et système de recherche avancé.",
    longDesc:
      "Ce projet est une API REST complète construite avec Node.js, Express et MongoDB pour gérer des biens immobiliers. Il inclut un système d'authentification multi-rôles (admin / agent / client) basé sur JWT et cookies sécurisés, la gestion des annonces avec upload d'images, un moteur de recherche filtré et une architecture modulaire scalable.",
    tags: ["Node.js", "MongoDB", "Express", "JWT", "REST API"],
    icon: "🏠",
    github: "https://github.com/yosrabenhmida/RealEstateWebsite.git",
    // Remplacez par votre vraie URL vidéo YouTube ou fichier local
    video:
      "https://res.cloudinary.com/dkd6eibgx/video/upload/v1781729253/immo-cap_xs77gsVc_hkxj5u.mp4",
    videoType: "local", // "fill=local" | "local"
  },
  {
    id: 2,
    title: "E-Books Management System",
    category: "Full-Stack",
    year: "2024",
    desc: "Application web de gestion d’e-books avec interface visiteur et dashboard admin sécurisé.",
    longDesc: `Dans ce projet, j’étais responsable du développement des sections Visitor et Admin.
      J’ai conçu et implémenté un dashboard administrateur complet permettant la gestion des utilisateurs (CRUD),
       ainsi que la gestion des e-books (ajout, modification et suppression). J’ai également développé l’interface
        visiteur permettant la recherche et la consultation des e-books. Le système inclut l’authentification et 
        l’autorisation sécurisées avec JWT et bcrypt, ainsi que la validation et la sécurisation des données.
         L’application est connectée à une API REST et développée en collaboration avec mon coéquipier qui s’est 
         occupé du côté client.`,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Bcrypt",
      "REST API",
    ],
    icon: "🔐",
    github: "https://github.com/yosrabenhmida/E-Book-Store.git",
    video:
      "https://res.cloudinary.com/dkd6eibgx/video/upload/v1781726085/ebook-cap_6iKo5GSB_a5cegc.mp4",
    videoType: "local",
  },
  {
    id: 3,
    title: "ReactMeals",
    category: "Frontend",
    year: "2023",
    desc: "Application de commande de repas en ligne avec panier dynamique et gestion des quantités en temps réel.",
    longDesc: `Application React de commande de repas en ligne. L'utilisateur peut parcourir une liste de plats, ajouter des articles au panier avec des quantités personnalisées, ajuster les quantités depuis le panier et voir le total calculé dynamiquement. Le tout avec une interface moderne et un modal de panier interactif.`,
    tags: ["React", "JavaScript", "CSS Modules", "useState", "useContext"],
    icon: "🍽️",
    github: "https://github.com/yosrabenhmida/Meals.git",
    video:
      "https://res.cloudinary.com/dkd6eibgx/video/upload/v1781730486/meals_wmieoh.mp4",
    videoType: "local",
  },
  {
    id: 4,
    title: "Gestion des Notes Scolaires",
    category: "Full-Stack",
    year: "2024",
    desc: "Plateforme web de gestion des notes avec 3 rôles : Admin, Professeur et Étudiant. Système d'accès granulaire par matière.",
    longDesc: `Plateforme de gestion scolaire développée avec Flask et SQLAlchemy. L'Admin gère les utilisateurs (étudiants, professeurs), les matières et une matrice d'accès permettant d'accorder ou révoquer l'accès d'un professeur à une matière. Le Professeur saisit et modifie les notes de ses matières accessibles. L'Étudiant consulte ses notes avec mentions et sa moyenne générale pondérée calculée automatiquement. Architecture MVC avec système d'authentification par rôle.`,
    tags: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "Jinja2",
      "CSS",
      "JavaScript",
    ],
    icon: "🎓",
    github: "https://github.com/yosrabenhmida/gestion-de-notes.git",
    video:
      "https://res.cloudinary.com/dkd6eibgx/video/upload/v1781727595/notes_Er5kGscs_yqilno.mp4",
    videoType: "local",
  },
  {
    id: 5,
    title: "Gestion Événements & Formations",
    category: "Full-Stack",
    year: "2024",
    desc: "Application MERN de gestion d'événements professionnels et programmes de formation avec deux rôles : Utilisateur et Admin.",
    longDesc: `Application web full-stack MERN pour centraliser la gestion d'événements professionnels (conférences, ateliers, réseautage) et de programmes de formation (formateurs, niveaux, durées). Un utilisateur peut naviguer dans le catalogue, s'inscrire à des événements ou formations et créer son propre contenu. L'administrateur dispose d'un accès complet pour superviser toute la plateforme. Backend API REST sécurisée par JWT, frontend SPA React avec navigation dynamique et authentification persistante.`,
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST API"],
    icon: "📅",
    github: "https://github.com/yosrabenhmida/formation-app.git",
    video:
      "https://res.cloudinary.com/dkd6eibgx/video/upload/v1781723756/events_O9DwH27x_vpamt9.mp4",
    videoType: "local",
  },
];

const cats = ["Tous", "Full-Stack", "Backend", "Frontend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selected, setSelected] = useState(null);
  const detailRef = useRef(null);

  const filtered =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleCardClick = (proj) => {
    setSelected(proj);
    // Wait one tick for the panel to render, then scroll
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <section className="section" id="projects" style={{ background: "#111" }}>
      <style>{`
        /* ── filters ── */
        .proj-filters {
          display: flex; gap: 8px; margin-bottom: 48px; flex-wrap: wrap;
        }
        .proj-filter-btn {
          padding: 8px 20px; border-radius: 30px;
          font-size: 0.72rem; font-weight: 500; letter-spacing: 0.5px;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.1);
          background: none; color: rgba(255,255,255,0.4);
          cursor: none; transition: all .2s;
        }
        .proj-filter-btn:hover { color: #fff; border-color: rgba(255,255,255,0.25); }
        .proj-filter-btn.active { background: var(--o); border-color: var(--o); color: #fff; }

        /* ── grid ── */
        .proj-grid {
          display: grid; grid-template-columns: repeat(2,1fr); gap: 20px;
        }

        /* ── card ── */
        .proj-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; overflow: hidden;
          cursor: none;
          transition: border-color .3s, transform .3s, box-shadow .3s;
          position: relative;
        }
        .proj-card:hover {
          border-color: rgba(232,68,10,0.35);
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
        }
        .proj-card.proj-card--active {
          border-color: var(--o);
          box-shadow: 0 0 0 2px rgba(232,68,10,0.25);
        }

        /* click hint overlay */
        .proj-thumb {
          height: 200px; background: #0d0d0d;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .proj-thumb-icon {
          font-size: 4rem; opacity: 0.15;
          transition: opacity .3s, transform .3s;
        }
        .proj-card:hover .proj-thumb-icon { opacity: 0.22; transform: scale(1.08); }
        .proj-thumb-gradient {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(232,68,10,0.12), transparent 70%);
        }
        .proj-thumb-lines {
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 28px,
            rgba(255,255,255,0.02) 28px, rgba(255,255,255,0.02) 29px
          );
        }
        .proj-play-hint {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.45);
          opacity: 0; transition: opacity .3s;
        }
        .proj-card:hover .proj-play-hint { opacity: 1; }
        .proj-play-circle {
          width: 52px; height: 52px; border-radius: 50%;
          background: var(--o);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 0 0 12px rgba(232,68,10,0.15);
        }
        .proj-year-badge {
          position: absolute; top: 16px; right: 16px;
          font-size: 0.62rem; letter-spacing: 1px; color: var(--o);
          background: rgba(232,68,10,0.1); border: 1px solid rgba(232,68,10,0.2);
          border-radius: 20px; padding: 3px 10px;
        }

        .proj-body { padding: 24px 28px 28px; }
        .proj-cat {
          font-size: 0.62rem; letter-spacing: 2px;
          text-transform: uppercase; color: var(--o); margin-bottom: 8px;
        }
        .proj-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1.1rem; color: #fff; margin-bottom: 10px; letter-spacing: -0.3px;
        }
        .proj-desc {
          font-size: 0.76rem; color: rgba(255,255,255,0.4);
          line-height: 1.8; margin-bottom: 18px;
        }
        .proj-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
        .proj-tag {
          font-size: 0.63rem; padding: 3px 9px; border-radius: 20px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.35);
        }
        .proj-footer {
          display: flex; align-items: center; gap: 12px;
          padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06);
          justify-content: space-between;
        }
        .proj-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.72rem; color: rgba(255,255,255,0.4);
          text-decoration: none; cursor: none; transition: color .2s; font-weight: 500;
        }
        .proj-link:hover { color: var(--o); }
        .proj-watch-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 600;
          color: var(--o); background: rgba(232,68,10,0.1);
          border: 1px solid rgba(232,68,10,0.25);
          border-radius: 20px; padding: 5px 14px;
          cursor: none; transition: all .2s;
        }
        .proj-watch-btn:hover { background: rgba(232,68,10,0.2); }

        /* ── detail panel ── */
        .proj-detail {
          margin-top: 48px;
          border: 1px solid rgba(232,68,10,0.25);
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255,255,255,0.02);
          animation: detailFadeIn .45s cubic-bezier(.16,1,.3,1);
        }
        @keyframes detailFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: none; }
        }
        .proj-detail-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .proj-detail-title-row { display: flex; align-items: center; gap: 14px; }
        .proj-detail-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(232,68,10,0.12); border: 1px solid rgba(232,68,10,0.22);
          display: flex; align-items: center; justify-content: center; font-size: 1.3rem;
        }
        .proj-detail-name {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1.05rem; color: #fff;
        }
        .proj-detail-cat {
          font-size: 0.62rem; letter-spacing: 2px;
          text-transform: uppercase; color: var(--o); margin-top: 2px;
        }
        .proj-detail-close {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: none; color: rgba(255,255,255,0.4);
          font-size: 1rem; display: flex; align-items: center; justify-content: center;
          cursor: none; transition: all .2s;
        }
        .proj-detail-close:hover {
          border-color: var(--o); color: var(--o);
          background: rgba(232,68,10,0.08);
        }

        .proj-detail-body {
          display: grid; grid-template-columns: 1.6fr 1fr; gap: 0;
        }

        /* video side */
        .proj-video-wrap {
          position: relative; background: #000;
          aspect-ratio: 16/9;
        }
        .proj-video-wrap iframe,
        .proj-video-wrap video {
          width: 100%; height: 100%; border: none; display: block;
        }

        /* info side */
        .proj-detail-info {
          padding: 32px 32px;
          border-left: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column; gap: 24px;
        }
        .proj-detail-desc {
          font-size: 0.8rem; color: rgba(255,255,255,0.5); line-height: 1.9;
        }
        .proj-detail-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .proj-detail-tag {
          font-size: 0.65rem; padding: 4px 11px; border-radius: 20px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.4);
        }
        .proj-detail-actions { display: flex; flex-direction: column; gap: 10px; margin-top: auto; }
        .proj-detail-gh {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px 20px; border-radius: 50px;
          background: var(--o); color: #fff;
          font-size: 0.78rem; font-weight: 600;
          text-decoration: none; cursor: none;
          transition: transform .2s, box-shadow .2s;
        }
        .proj-detail-gh:hover { transform: scale(1.03); box-shadow: 0 6px 24px rgba(232,68,10,0.35); }

        /* more */
        .proj-more { margin-top: 48px; text-align: center; }
        .proj-more p { font-size: 0.8rem; color: var(--gray); margin-bottom: 18px; }

        @media(max-width:900px) {
          .proj-grid { grid-template-columns: 1fr; }
          .proj-detail-body { grid-template-columns: 1fr; }
          .proj-detail-info { border-left: none; border-top: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>

      <span className="section-label reveal">Portfolio</span>
      <h2 className="section-title reveal">
        Mes <span>Projets</span>
      </h2>

      {/* Filters */}
      <div className="proj-filters reveal">
        {cats.map((c) => (
          <button
            key={c}
            className={`proj-filter-btn${activeFilter === c ? " active" : ""}`}
            onClick={() => {
              setActiveFilter(c);
              setSelected(null);
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="proj-grid">
        {filtered.map((p, i) => (
          <div
            className={`proj-card reveal${selected?.id === p.id ? " proj-card--active" : ""}`}
            key={p.id}
            style={{ transitionDelay: `${i * 0.08}s` }}
            onClick={() => handleCardClick(p)}
          >
            <div className="proj-thumb">
              <div className="proj-thumb-lines" />
              <div className="proj-thumb-gradient" />
              <span className="proj-thumb-icon">{p.icon}</span>
              <span className="proj-year-badge">{p.year}</span>
              <div className="proj-play-hint">
                <div className="proj-play-circle">▶</div>
              </div>
            </div>
            <div className="proj-body">
              <div className="proj-cat">{p.category}</div>
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span className="proj-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-footer">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <span className="proj-watch-btn">▶ Voir la démo</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail / video panel */}
      {selected && (
        <div className="proj-detail" ref={detailRef}>
          <div className="proj-detail-header">
            <div className="proj-detail-title-row">
              <div className="proj-detail-icon">{selected.icon}</div>
              <div>
                <div className="proj-detail-name">{selected.title}</div>
                <div className="proj-detail-cat">
                  {selected.category} · {selected.year}
                </div>
              </div>
            </div>
            <button
              className="proj-detail-close"
              onClick={handleClose}
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          <div className="proj-detail-body">
            {/* Video */}
            <div className="proj-video-wrap">
              {selected.videoType === "fill=local" ? (
                <iframe
                  src={selected.video + "?autoplay=1&rel=0"}
                  title={selected.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={selected.video} controls autoPlay />
              )}
            </div>

            {/* Info */}
            <div className="proj-detail-info">
              <div>
                <p className="proj-detail-desc">{selected.longDesc}</p>
              </div>
              <div className="proj-detail-tags">
                {selected.tags.map((t) => (
                  <span className="proj-detail-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-detail-actions">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-detail-gh"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* More */}
      <div className="proj-more reveal">
        <p>D'autres projets disponibles sur mon GitHub</p>
        <a
          href="https://github.com/yosrabenhmida"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Voir tous mes projets
        </a>
      </div>
    </section>
  );
}
