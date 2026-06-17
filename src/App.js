import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Custom cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let rx = 0, ry = 0, mx = 0, my = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; }
    });

    const animRing = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      requestAnimationFrame(animRing);
    };
    animRing();

    // Cursor grow on hover
    const onEnter = () => { if (cursor) { cursor.style.width = '6px'; cursor.style.height = '6px'; } if (ring) { ring.style.width = '60px'; ring.style.height = '60px'; ring.style.borderColor = 'var(--o)'; } };
    const onLeave = () => { if (cursor) { cursor.style.width = '10px'; cursor.style.height = '10px'; } if (ring) { ring.style.width = '38px'; ring.style.height = '38px'; ring.style.borderColor = 'rgba(255,255,255,0.25)'; } };
    document.querySelectorAll('a, button').forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;