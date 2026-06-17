import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const infos = [
  {
    icon: "📧",
    label: "Email",
    value: "bhmidayosra@gmail.com",
    href: "mailto:bhmidayosra@gmail.com",
  },
  {
    icon: "📞",
    label: "Téléphone",
    value: "+216 25 705 519",
    href: "tel:+21625705519",
  },
  {
    icon: "📍",
    label: "Localisation",
    value: "Dar Chaabenne El Fehri, Tunisie",
    href: null,
  },
  {
    icon: "💼",
    label: "Disponibilité",
    value: "Disponible pour missions freelance",
    href: null,
    highlight: true,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_g8a705q",
        "template_h33e6qs",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "dK6iQzu5qqePkx-Eo",
      );

      setSent(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi");
    }
  };

  return (
    <section className="section" id="contact" style={{ background: "#0d0d0d" }}>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 64px;
          align-items: start;
        }

        /* LEFT – info */
        .contact-tagline {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.85;
          margin-bottom: 40px;
          max-width: 360px;
        }
        .contact-infos {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 40px;
        }
        .ci-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          color: inherit;
          cursor: none;
          transition: border-color .3s, background .3s;
        }
        .ci-row:hover, a.ci-row:hover { border-color: rgba(232,68,10,0.3); background: rgba(232,68,10,0.04); }
        .ci-row.highlight { border-color: rgba(232,68,10,0.2); background: rgba(232,68,10,0.06); }
        .ci-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(232,68,10,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .ci-label {
          font-size: 0.62rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 2px;
        }
        .ci-value {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
        }
        .ci-row.highlight .ci-value { color: var(--o); }

        .contact-socials {
          display: flex;
          gap: 10px;
        }
        .cs-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 0.72rem;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          cursor: none;
          transition: all .2s;
          font-weight: 500;
        }
        .cs-link:hover { color: var(--o); border-color: rgba(232,68,10,0.4); background: rgba(232,68,10,0.06); }

        /* RIGHT – form */
        .contact-form {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 40px;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
        .form-label {
          font-size: 0.65rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .form-input, .form-textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 13px 16px;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          outline: none;
          transition: border-color .2s, background .2s;
          width: 100%;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: rgba(255,255,255,0.2); }
        .form-input:focus, .form-textarea:focus {
          border-color: rgba(232,68,10,0.4);
          background: rgba(232,68,10,0.04);
        }
        .form-textarea { resize: vertical; min-height: 130px; }
        .form-submit {
          width: 100%;
          padding: 15px;
          border-radius: 50px;
          background: var(--o);
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: none;
          transition: transform .2s, box-shadow .2s;
          margin-top: 4px;
          letter-spacing: 0.3px;
        }
        .form-submit:hover { transform: scale(1.02); box-shadow: 0 8px 30px rgba(232,68,10,.35); }

        .form-success {
          text-align: center;
          padding: 48px 24px;
        }
        .form-success-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        .form-success h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .form-success p {
          font-size: 0.8rem;
          color: var(--gray);
        }

        /* Footer */
        .contact-footer {
          margin-top: 80px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .cf-copy {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.2);
        }
        .cf-copy span { color: var(--o); }
        .cf-back {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.2);
          text-decoration: none;
          cursor: none;
          transition: color .2s;
        }
        .cf-back:hover { color: var(--o); }

        @media(max-width:900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .form-row { grid-template-columns: 1fr; }
          .contact-form { padding: 28px; }
        }
      `}</style>

      <span className="section-label reveal">Me joindre</span>
      <h2 className="section-title reveal">
        Travaillons <span>ensemble</span>
      </h2>

      <div className="contact-grid">
        {/* LEFT */}
        <div className="reveal">
          <p className="contact-tagline">
            Vous avez un projet web ? Je suis disponible pour des missions
            freelance — développement d'API, applications React, intégration
            backend/frontend. Contactez-moi pour un devis gratuit.
          </p>

          <div className="contact-infos">
            {infos.map((info) =>
              info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className={`ci-row${info.highlight ? " highlight" : ""}`}
                >
                  <div className="ci-icon">{info.icon}</div>
                  <div>
                    <div className="ci-label">{info.label}</div>
                    <div className="ci-value">{info.value}</div>
                  </div>
                </a>
              ) : (
                <div
                  key={info.label}
                  className={`ci-row${info.highlight ? " highlight" : ""}`}
                >
                  <div className="ci-icon">{info.icon}</div>
                  <div>
                    <div className="ci-label">{info.label}</div>
                    <div className="ci-value">{info.value}</div>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/yosrabenhmida"
              target="_blank"
              rel="noreferrer"
              className="cs-link"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yosra-ben-hmida/"
              target="_blank"
              rel="noreferrer"
              className="cs-link"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT – form */}
        <div className="contact-form reveal">
          {sent ? (
            <div className="form-success">
              <div className="form-success-icon">✅</div>
              <h3>Message envoyé !</h3>
              <p>
                Merci pour votre message. Je vous répondrai dans les plus brefs
                délais.
              </p>
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nom</label>
                  <input
                    className="form-input"
                    name="name"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Sujet</label>
                <input
                  className="form-input"
                  name="subject"
                  placeholder="Objet de votre message"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Décrivez votre projet ou opportunité..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button className="form-submit" onClick={handleSubmit}>
                Envoyer le message →
              </button>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer reveal">
        <p className="cf-copy">
          © 2025 <span>Yosra Ben Hmida</span>. Tous droits réservés.
        </p>
        <a href="#home" className="cf-back">
          Retour en haut ↑
        </a>
      </div>
    </section>
  );
}
