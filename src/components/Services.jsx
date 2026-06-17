import React from "react";

const services = [
  {
    icon: "⚡",
    num: "01",
    title: "Développement Backend",
    desc: "API REST sécurisées avec Node.js, Express et MongoDB. Authentification JWT, gestion des rôles, middleware de sécurité et architecture scalable.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    icon: "🎨",
    num: "02",
    title: "Développement Frontend",
    desc: "Interfaces modernes et réactives avec React et Next.js. Gestion d'état avec Redux, intégration API, animations CSS et design responsive.",
    tags: ["React", "Next.js", "Redux", "CSS"],
  },
  {
    icon: "🔒",
    num: "03",
    title: "Sécurité & Auth",
    desc: "Mise en place de systèmes d'authentification robustes : JWT, cookies sécurisés, OAuth, réinitialisation par email avec Nodemailer.",
    tags: ["JWT", "OAuth", "Cookies", "Nodemailer"],
  },
  {
    icon: "☁️",
    num: "04",
    title: "Cloud & DevOps",
    desc: "Déploiement d'applications sur des infrastructures cloud. Maîtrise des concepts IaaS/PaaS/SaaS, virtualisation et environnements Ubuntu.",
    tags: ["Cloud", "IaaS", "PaaS", "Ubuntu"],
  },
  {
    icon: "🗄️",
    num: "05",
    title: "Base de Données",
    desc: "Conception et optimisation de bases de données NoSQL et relationnelles. Modélisation avec Mongoose, Firebase Realtime Database et XAMPP.",
    tags: ["MongoDB", "Firebase", "Mongoose", "XAMPP"],
  },
  {
    icon: "🚀",
    num: "06",
    title: "Applications Full-Stack",
    desc: "Développement complet d'applications web de bout en bout — architecture, base de données, API, frontend — avec des pratiques Scrum agiles.",
    tags: ["Full-Stack", "REST API", "Scrum", "JSON"],
  },
];

export default function Services() {
  return (
    <section
      className="section"
      id="services"
      style={{ background: "#0d0d0d" }}
    >
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
        }
        .srv-card {
          background: #0d0d0d;
          padding: 36px 32px;
          position: relative;
          transition: background .3s;
          cursor: none;
          overflow: hidden;
        }
        .srv-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 0% 0%, rgba(232,68,10,0.07) 0%, transparent 65%);
          opacity: 0;
          transition: opacity .4s;
        }
        .srv-card:hover { background: #111; }
        .srv-card:hover::after { opacity: 1; }
        .srv-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .srv-icon {
          width: 48px; height: 48px;
          background: rgba(232,68,10,0.1);
          border: 1px solid rgba(232,68,10,0.2);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem;
          transition: background .3s, border-color .3s;
        }
        .srv-card:hover .srv-icon {
          background: rgba(232,68,10,0.18);
          border-color: rgba(232,68,10,0.4);
        }
        .srv-num {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(255,255,255,0.12);
          letter-spacing: 2px;
          transition: color .3s;
        }
        .srv-card:hover .srv-num { color: var(--o); }
        .srv-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 12px;
          color: #fff;
          letter-spacing: -0.3px;
        }
        .srv-desc {
          font-size: 0.76rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .srv-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .srv-tag {
          font-size: 0.65rem;
          padding: 3px 10px;
          border-radius: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.3px;
          transition: color .3s, border-color .3s;
        }
        .srv-card:hover .srv-tag {
          color: rgba(255,255,255,0.55);
          border-color: rgba(255,255,255,0.12);
        }
        .srv-arrow {
          position: absolute;
          bottom: 32px; right: 32px;
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.2);
          transition: background .3s, border-color .3s, color .3s, transform .3s;
        }
        .srv-card:hover .srv-arrow {
          background: var(--o);
          border-color: var(--o);
          color: #fff;
          transform: rotate(45deg);
        }

        /* CTA band */
        .services-cta {
          margin-top: 56px;
          padding: 40px 48px;
          background: rgba(232,68,10,0.06);
          border: 1px solid rgba(232,68,10,0.15);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .services-cta-text h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          margin-bottom: 6px;
        }
        .services-cta-text p {
          font-size: 0.8rem;
          color: var(--gray);
        }

        @media(max-width:1100px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width:700px) {
          .services-grid { grid-template-columns: 1fr; }
          .services-cta { flex-direction: column; text-align: center; }
        }
      `}</style>

      <span className="section-label reveal">Ce que je fais</span>
      <h2 className="section-title reveal">
        Mes <span>Services</span>
      </h2>

      <div className="services-grid stagger">
        {services.map((s) => (
          <div className="srv-card" key={s.num}>
            <div className="srv-top">
              <div className="srv-icon">{s.icon}</div>
              <span className="srv-num">{s.num}</span>
            </div>
            <div className="srv-title">{s.title}</div>
            <div className="srv-desc">{s.desc}</div>
            <div className="srv-tags">
              {s.tags.map((t) => (
                <span className="srv-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="srv-arrow">↗</div>
          </div>
        ))}
      </div>

      <div className="services-cta reveal">
        <div className="services-cta-text">
          <h3>Un projet en tête ?</h3>
          <p>
            Discutons de vos besoins et construisons quelque chose ensemble.
          </p>
        </div>
        <a className="btn-primary" href="#contact">
          Démarrer un projet →
        </a>
      </div>
    </section>
  );
}
