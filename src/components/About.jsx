import React from "react";

const skills = [
  { cat: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML/CSS"] },
  {
    cat: "Backend",
    items: ["Node.js", "Express.js", "Mongoose", "PHP / Symfony"],
  },
  { cat: "Base de données", items: ["MongoDB", "Firebase", "XAMPP"] },
  {
    cat: "Sécurité",
    items: ["JWT", "Auth & Autorisation", "Cookies sécurisés", "Nodemailer"],
  },
  {
    cat: "Cloud",
    items: [
      "Cloud Computing",
      "IaaS / PaaS / SaaS",
      "Virtualisation",
      "Ubuntu",
    ],
  },
  {
    cat: "Autres",
    items: [
      "Redux",
      "REST API",
      "JSON",
      "HTTPS",
      "Scrum",
      "C / MATLAB / Assembly",
    ],
  },
];

const langs = [
  { lang: "Arabe", level: 100, label: "Natif" },
  { lang: "Français", level: 85, label: "Courant" },
  { lang: "Anglais", level: 75, label: "Professionnel" },
  { lang: "Turc", level: 55, label: "Intermédiaire" },
  { lang: "Italien", level: 40, label: "Notions" },
];

const education = [
  {
    date: "12/2024 – 06/2025",
    title: "Stage de fin d'études",
    place: "Dundill · Akouda, Sousse",
    desc: "API REST sécurisée pour gestion immobilière avec MongoDB. Système sécurisé et évolutif.",
  },
  {
    date: "06/2024 – 07/2024",
    title: "Développement Web",
    place: "Booster BC · Mrezga, Nabeul",
    desc: "Authentification JWT, réinitialisation par email, protection des données utilisateurs.",
  },
  {
    date: "08/2023 – 07/2023",
    title: "Développement Web",
    place: "Sofirux",
    desc: "Applications web avec Symfony, bonnes pratiques de conception.",
  },
  {
    date: "07/2023 – 08/2023",
    title: "Représentant service client",
    place: "UIB · Nabeul",
    desc: "Opérations bancaires, gestion de compte, résolution de problématiques clients.",
  },
];

export default function About() {
  return (
    <section className="section" id="about" style={{ background: "#111" }}>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 48px;
        }
        .skill-cat {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 20px;
          transition: border-color .3s;
          cursor: none;
        }
        .skill-cat:hover { border-color: rgba(232,68,10,0.3); }
        .skill-cat-name {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--o);
          margin-bottom: 12px;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .skill-tag {
          font-size: 0.7rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 4px 10px;
          color: rgba(255,255,255,0.6);
        }

        /* languages */
        .lang-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 48px; }
        .lang-row {}
        .lang-top { display: flex; justify-content: space-between; margin-bottom: 7px; font-size: 0.78rem; }
        .lang-name { font-weight: 500; }
        .lang-label { color: var(--gray); font-size: 0.7rem; }
        .lang-bar { height: 3px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; }
        .lang-fill {
          height: 100%;
          background: var(--o);
          border-radius: 4px;
          width: 0;
          transition: width 1.2s cubic-bezier(.16,1,.3,1);
        }
        .lang-fill.animate { width: var(--w); }

        /* timeline */
        .timeline { position: relative; padding-left: 24px; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 5px; top: 8px; bottom: 8px;
          width: 1px;
          background: rgba(255,255,255,0.08);
        }
        .tl-item {
          position: relative;
          padding-bottom: 32px;
          cursor: none;
        }
        .tl-item::before {
          content: '';
          position: absolute;
          left: -24px;
          top: 6px;
          width: 10px; height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.2);
          background: var(--dark);
          transition: border-color .3s, background .3s;
        }
        .tl-item:hover::before { border-color: var(--o); background: var(--o); }
        .tl-date { font-size: 0.65rem; color: var(--o); letter-spacing: 1px; margin-bottom: 5px; }
        .tl-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.88rem; margin-bottom: 3px; }
        .tl-place { font-size: 0.72rem; color: var(--gray); margin-bottom: 6px; }
        .tl-desc { font-size: 0.75rem; color: rgba(255,255,255,0.45); line-height: 1.7; }

        @media(max-width:900px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <span className="section-label reveal">Qui suis-je ?</span>
      <h2 className="section-title reveal">
        À propos <span>de moi</span>
      </h2>

      <div className="about-grid">
        <div>
          <p
            className="reveal"
            style={{
              fontSize: "0.9rem",
              color: "var(--gray)",
              lineHeight: 1.85,
              marginBottom: 36,
            }}
          >
            Je suis <strong style={{ color: "#fff" }}>Yosra Ben Hmida</strong>,
            Future Ingénieur en Génie Logiciel Développeuse Full Stack &
            Researcher AI basée à Nabeul,. Passionnée par la création
            d'applications web complètes — du backend sécurisé avec Node.js et
            MongoDB jusqu'au frontend React. Je travaille en freelance avec des
            clients pour créer des applications web complètes — du backend
            sécurisé avec Node.js et MongoDB jusqu'au frontend React. Chaque
            projet est livré dans les délais, bien documenté et maintenable.
          </p>

          <div className="skills-grid stagger">
            {skills.map((s) => (
              <div className="skill-cat" key={s.cat}>
                <div className="skill-cat-name">{s.cat}</div>
                <div className="skill-tags">
                  {s.items.map((it) => (
                    <span className="skill-tag" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3
            className="reveal"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: 20,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "-0.5px",
            }}
          >
            Langues
          </h3>
          <div className="lang-list reveal">
            {langs.map((l) => (
              <LangBar key={l.lang} {...l} />
            ))}
          </div>
        </div>

        <div>
          <h3
            className="reveal"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: 28,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "-0.5px",
            }}
          >
            Expériences & Formations
          </h3>
          <div className="timeline">
            {education.map((e, i) => (
              <div className="tl-item reveal" key={i}>
                <div className="tl-date">{e.date}</div>
                <div className="tl-title">{e.title}</div>
                <div className="tl-place">{e.place}</div>
                <div className="tl-desc">{e.desc}</div>
              </div>
            ))}
          </div>

          <div
            className="reveal"
            style={{
              marginTop: 36,
              padding: "20px 24px",
              background: "rgba(232,68,10,0.08)",
              border: "1px solid rgba(232,68,10,0.2)",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                color: "var(--o)",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Contact
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 2,
              }}
            >
              📧 bhmidayosra@gmail.com
              <br />
              📞 +216 25 705 519
              <br />
              📍 Dar Chaabenne El Fehri, Tunisie
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LangBar({ lang, level, label }) {
  const ref = React.useRef(null);
  const [animated, setAnimated] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="lang-row" ref={ref}>
      <div className="lang-top">
        <span className="lang-name">{lang}</span>
        <span className="lang-label">{label}</span>
      </div>
      <div className="lang-bar">
        <div
          className={`lang-fill${animated ? " animate" : ""}`}
          style={{ "--w": level + "%" }}
        />
      </div>
    </div>
  );
}
