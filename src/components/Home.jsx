import React, { useEffect, useRef } from "react";
import "./Home.css";

const MARQUEE_ITEMS = [
  "Node.js",
  "React",
  "MongoDB",
  "Express.js",
  "JWT",
  "Next.js",
  "Cloud",
  "REST API",
  "Redux",
  "Firebase",
  "JavaScript",
  "PHP",
  "Recherche IA",
  "Modèles Quantiques",
  "Architectural Design",
];

export default function Home() {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // ── PARTICLE CANVAS BACKGROUND ──
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw particles with pulse effect
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        // Pulse animation
        p.pulse += 0.02;
        const pulseAlpha = p.alpha + Math.sin(p.pulse) * 0.1;

        ctx.fillStyle = `rgba(232, 68, 10, ${pulseAlpha})`;
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 68, 10, ${pulseAlpha * 0.3})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    // ── ANIMATED GRADIENT BACKGROUND ──
    const gradient = gradientRef.current;
    if (gradient) {
      gradient.style.background = `
        radial-gradient(
          600px circle at 30% 20%,
          rgba(232, 68, 10, 0.15),
          transparent 40%
        ),
        radial-gradient(
          500px circle at 70% 80%,
          rgba(232, 68, 10, 0.1),
          transparent 40%
        )
      `;

      let angle = 0;
      const animateGradient = () => {
        angle += 0.3;
        gradient.style.background = `
          radial-gradient(
            600px circle at ${30 + Math.sin(angle * 0.01) * 10}% ${20 + Math.cos(angle * 0.01) * 10}%,
            rgba(232, 68, 10, 0.15),
            transparent 40%
          ),
          radial-gradient(
            500px circle at ${70 + Math.cos(angle * 0.01) * 10}% ${80 + Math.sin(angle * 0.01) * 10}%,
            rgba(232, 68, 10, 0.1),
            transparent 40%
          )
        `;
        requestAnimationFrame(animateGradient);
      };
      animateGradient();
    }

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="home-section" id="home">
      {/* Animated gradient background */}
      <div ref={gradientRef} className="home-gradient" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="home-canvas" />

      <div className="home-wrap">
        <div className="home-left">
          {/* Eyebrow with animation */}
          <div className="home-eyebrow reveal-left">
            <span className="eyebrow-dot" />
            <span>Disponible pour vos projets</span>
          </div>

          {/* H1 with stagger animation */}
          <h1 className="home-h1 reveal-left">
            <span className="h1-hi">Bonjour, je suis</span>
            <span className="h1-name">
              Yosra
              <br />
              <em>Ben Hmida</em>
            </span>
          </h1>

          {/* Role with typing effect */}
          <div className="home-role reveal-left">
            <span className="role-text">Développeuse Full-Stack</span>
            <span className="role-cursor">|</span>
          </div>

          <div className="home-role-sub reveal-left">
            <span className="role-text">
              Future Ingénieur en Génie Logiciel
            </span>
            <span className="role-cursor">|</span>
          </div>

          {/* Bio */}
          <p className="home-bio reveal-right">
            Je conçois et développe des applications web sur mesure — backend
            sécurisé, frontend moderne, déploiement cloud. Rapide, fiable, et
            orientée résultats. Développeuse Full Stack & Researcher AI
            spécialisée en design architectural intelligent.
          </p>

          {/* Actions */}
          <div className="home-actions reveal-right">
            <a className="btn-primary" href="#projects">
              <span>Voir mes projets</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M10 5l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a className="btn-outline" href="#contact">
              <span>Me contacter</span>
            </a>
          </div>

          {/* Socials */}
          <div className="home-socials reveal-right">
            <a
              href="https://github.com/yosrabenhmida"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yosra-ben-hmida/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* RIGHT - Photo with advanced design */}
        <div className="home-right reveal">
          <div className="home-photo-wrap">
            {/* Animated rings with different speeds */}
            <div className="photo-ring ring1" />
            <div className="photo-ring ring2" />
            <div className="photo-ring ring3" />

            {/* Glow effect behind photo */}
            <div className="photo-glow" />

            {/* Photo blob with gradient border */}
            <div className="photo-blob">
              <div className="photo-border" />
              <img
                src="/yosra.JPG"
                alt="Yosra Ben Hmida"
                className="photo-img"
              />
            </div>

            {/* Top badge */}
            <div className="photo-badge badge-top">
              <span className="badge-icon">⚡</span>
              <div>
                <div className="badge-val">Full-Stack</div>
                <div className="badge-sub">Développeuse</div>
              </div>
            </div>

            {/* Bottom badge */}
            <div className="photo-badge badge-bot">
              <span className="badge-icon">🚀</span>
              <div>
                <div className="badge-val">4 Projets</div>
                <div className="badge-sub">sur GitHub</div>
              </div>
            </div>

            {/* AI badge */}
            <div className="photo-badge badge-right">
              <span className="badge-icon">🧠</span>
              <div>
                <div className="badge-val">Recherche IA</div>
                <div className="badge-sub">Modèles Quantiques</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="home-stats stagger">
        <div className="stat-item">
          <div className="stat-num">
            4<span>+</span>
          </div>
          <div className="stat-lbl">Projets réalisés</div>
        </div>
        <div className="stat-div" />
        <div className="stat-item">
          <div className="stat-num">
            5<span>+</span>
          </div>
          <div className="stat-lbl">Langues parlées</div>
        </div>
        <div className="stat-div" />
        <div className="stat-item">
          <div className="stat-num">
            3<span>+</span>
          </div>
          <div className="stat-lbl">Stages effectués</div>
        </div>
        <div className="stat-div" />
        <div className="stat-item">
          <div className="stat-num">
            10<span>+</span>
          </div>
          <div className="stat-lbl">Technologies</div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="mq-item">
              <span className="mq-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
