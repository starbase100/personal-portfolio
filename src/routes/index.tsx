import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Camera, FlaskConical, MapPin, Moon, Sparkles, Sun } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import portraitAsset from "@/assets/mojalefa-portrait.jpeg.asset.json";
import taxonomyArt from "@/assets/rf-taxonomy.jpg";
import jobArt from "@/assets/rf-jobfinder.jpg";
import skillsArt from "@/assets/rf-futureskills.jpg";
import aiArt from "@/assets/rf-aisystems.jpg";
import dayLandscape from "@/assets/ukiyoe-highveld-day.jpg";
import nightLandscape from "@/assets/ukiyoe-highveld-night.jpg";
import shipImage from "@/assets/ukiyoe-spaceship.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mojalefa Moletsane — Software, AI & Data Systems" },
      { name: "description", content: "Portfolio of Mojalefa Tswelopele Moletsane: software development, AI research and data-driven systems." },
      { property: "og:title", content: "Mojalefa Moletsane — Software, AI & Data Systems" },
      { property: "og:description", content: "Building systems that make complexity useful." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { number: "01", title: "Taxonomy Platform", meta: "Software · Backend · Data Systems", description: "Building a system for connecting occupations, skills and specialisations.", art: taxonomyArt, alt: "Glass tiles forming a branching taxonomy", span: "wide" },
  { number: "02", title: "Job Finder App", meta: "Software · AI · Data", description: "A personal project exploring job discovery and search, connected to the direction of skills-mapping work.", art: jobArt, alt: "Glass magnifier over a grid of job cards", span: "tall" },
  { number: "03", title: "Future Skills Map", meta: "AI · Systems · Research", description: "An AI and data-driven initiative connecting occupations, skills and labour-market information to understand skills-development challenges.", art: skillsArt, alt: "Connected glass spheres forming a map", span: "tall" },
  { number: "04", title: "AI Systems", meta: "AI · LLM · Software Systems", description: "Work around LLMs, NLP, document-based systems, APIs, validation and related AI software.", art: aiArt, alt: "Stack of glass document sheets with a glowing chip", span: "wide" },
];

const research = [
  { number: "R/01", title: "Skills Mapping & Forecasting", meta: "AI · Data · Labour Markets", description: "How data, AI and computational methods can improve the mapping of skills, occupations and labour-market demand." },
  { number: "R/02", title: "Labour-Market Data & Skills Taxonomies", meta: "Data · AI/NLP · Research", description: "The technical, methodological, legal and ethical challenges of external labour-market and occupational data for skills-mapping systems in South Africa." },
];

const navItems = ["work", "research", "about", "experimentation", "contact"];
const COLS = 14;
const ROWS = 9;

function ScrambleText({ text }: { text: string }) {
  const [out, setOut] = useState(text);
  const run = () => {
    const glyphs = "▚▞▖▗▘▝■□01";
    let frame = 0;
    const id = window.setInterval(() => {
      frame++;
      setOut(text.split("").map((c, i) => (c === " " || i < frame ? c : glyphs[(i + frame) % glyphs.length])).join(""));
      if (frame > text.length) { window.clearInterval(id); setOut(text); }
    }, 22);
  };
  return <span onPointerEnter={run} onFocus={run}>{out}</span>;
}

function DotRevealCard({ project }: { project: (typeof projects)[number] }) {
  const cells = Array.from({ length: COLS * ROWS }, (_, i) => {
    const c = i % COLS, r = Math.floor(i / COLS);
    const dx = (c + 0.5) / COLS - 0.5, dy = ((r + 0.5) / ROWS - 0.5) * (ROWS / COLS);
    return { c, r, d: Math.hypot(dx, dy) };
  });
  return (
    <article className={`project-card ${project.span}`} tabIndex={0}>
      <div className="card-media">
        <img className="base" src={project.art} alt={project.alt} width={1280} height={832} loading="lazy" />
        <div className="dot-matrix" aria-hidden="true">
          {cells.map((cell, i) => (
            <i key={i} style={{
              backgroundImage: `url(${project.art})`,
              backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
              backgroundPosition: `${(cell.c / (COLS - 1)) * 100}% ${(cell.r / (ROWS - 1)) * 100}%`,
              transitionDelay: `${cell.d * 0.55}s`,
            }} />
          ))}
        </div>
        <span className="card-index">{project.number}</span>
      </div>
      <div className="card-info">
        <h3><ScrambleText text={project.title} /></h3>
        <ArrowUpRight size={20} aria-hidden="true" />
        <p>{project.description}</p>
        <span className="mono">{project.meta}</span>
      </div>
    </article>
  );
}

function ShipJourney() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cur = 0, raf = 0, angle = 0;
    const pos = (p: number) => {
      const t = p * Math.PI * 2 * 2.25 - Math.PI / 2;
      return { x: 50 + Math.sin(t) * 38, y: 12 + p * 70 + Math.sin(t * 2) * 4 };
    };
    const loop = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = max > 0 ? window.scrollY / max : 0;
      cur += (target - cur) * (reduce ? 1 : 0.08);
      const a = pos(cur), b = pos(Math.min(cur + 0.004, 1.004));
      const dx = (b.x - a.x) * window.innerWidth, dy = (b.y - a.y) * window.innerHeight;
      const goal = Math.atan2(dy, dx) * 180 / Math.PI;
      let diff = goal - angle; diff = ((diff + 540) % 360) - 180;
      if (Math.hypot(dx, dy) > 0.5) angle += diff * 0.12;
      const flip = Math.abs(((angle % 360) + 360) % 360 - 180) < 90 ? -1 : 1;
      if (ref.current) ref.current.style.transform = `translate3d(${a.x}vw, ${a.y}vh, 0) rotate(${angle}deg) scaleY(${flip})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <div ref={ref} className="ship-journey" aria-hidden="true"><span className="ship-trail" /><img src={shipImage} alt="" width={1024} height={512} /></div>;
}

function Portfolio() {
  const [active, setActive] = useState("work");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [time, setTime] = useState("");
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    setTheme(stored === "dark" || stored === "light" ? stored : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const tick = () => setTime(new Date().toLocaleTimeString("en-ZA", { timeZone: "Africa/Johannesburg", hour: "2-digit", minute: "2-digit" }));
    tick();
    const t = window.setInterval(tick, 30000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    document.documentElement.dataset["theme"] = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let last = window.scrollY, lastT = performance.now(), v = 0, raf = 0;
    const loop = (now: number) => {
      const dy = window.scrollY - last, dt = Math.max(now - lastT, 1);
      const target = Math.max(-1, Math.min(1, dy / dt / 3));
      v += (target - v) * (Math.abs(target) > Math.abs(v) ? 0.35 : 0.08);
      root.style.setProperty("--scroll-v", reduce ? "0" : v.toFixed(3));
      last = window.scrollY; lastT = now;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onMove = (e: PointerEvent) => {
      root.style.setProperty("--px", (e.clientX / window.innerWidth - 0.5).toFixed(3));
      root.style.setProperty("--py", (e.clientY / window.innerHeight - 0.5).toFixed(3));
    };
    window.addEventListener("pointermove", onMove);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); });
      const visible = entries.filter((e) => e.isIntersecting && navItems.includes(e.target.id)).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { threshold: [0.15, 0.4] });
    document.querySelectorAll("section, footer, .reveal").forEach((n) => observer.observe(n));
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); observer.disconnect(); };
  }, []);

  return (
    <main className="rf-shell">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className="rf-nav" aria-label="Portfolio sections">
        <a href="#main-content" className="brand">MTM<span>●</span></a>
        <div className="nav-links">{navItems.map((item) => <a key={item} href={`#${item}`} className={active === item ? "active" : ""}>{item}</a>)}</div>
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          {theme === "light" ? <Moon size={15} aria-hidden="true" /> : <Sun size={15} aria-hidden="true" />}
        </button>
      </nav>

      <div className="rf-backdrop" aria-hidden="true">
        <img src={dayLandscape} alt="" className="land land-day" width={1920} height={1280} />
        <img src={nightLandscape} alt="" className="land land-night" width={1920} height={1280} />
        <div className="land-wash" />
      </div>
      <ShipJourney />

      <header className="rf-hero" id="main-content" ref={heroRef}>
        <div className="hero-meta mono">
          <span>MOJALEFA TSWELOPELE MOLETSANE</span>
          <span><MapPin size={12} aria-hidden="true" /> JOHANNESBURG · ZA {time && `· ${time}`}</span>
        </div>
        <div className="glass-stage" aria-hidden="true">
          <span className="sticker s1" /><span className="sticker s2" /><span className="sticker s3" />
          <div className="glass-word"><span>hello</span><i className="flare" /></div>
        </div>
        <h1>I build systems that make <em>complexity useful.</em></h1>
        <div className="hero-foot">
          <p>Software development, AI research and data-driven systems focused on turning complex information into useful, understandable tools.</p>
          <a className="pill-btn" href="#work">See the work <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <section id="what-i-do" className="rf-intro reveal">
        <p className="mono label">01 — ORIENTATION</p>
        <p className="intro-statement">I turn complex information into useful systems.</p>
        <ul className="chips">{["Software development", "AI systems", "Data", "Research"].map((c) => <li key={c}>{c}</li>)}</ul>
      </section>

      <section id="work" className="rf-section">
        <div className="sec-head"><span className="mono">02 — SELECTED SYSTEMS</span><h2>Work</h2><p>Engineering, product thinking and research-led software.</p></div>
        <div className="project-grid">{projects.map((p) => <DotRevealCard key={p.number} project={p} />)}</div>
      </section>

      <section id="research" className="rf-section rf-dark">
        <div className="sec-head"><span className="mono">03 — INTERACTIVE NOTEBOOK</span><h2>Research</h2><p>Understanding the relationships between people, skills, work and systems.</p></div>
        <div className="research-wrap">
          <div className="node-map" aria-label="Skills connect to occupations, industry, education and labour market">
            {["SKILLS", "OCCUPATIONS", "INDUSTRY", "EDUCATION", "LABOUR MARKET"].map((n, i) => <span key={n} className={`n n${i}`}>{n}</span>)}
            <svg viewBox="0 0 600 400" aria-hidden="true"><path d="M300 60 L140 170 L460 170 L220 330 L380 330 L460 170 M140 170 L220 330 M300 60 L460 170" /></svg>
          </div>
          <div className="research-list">{research.map((r) => <article key={r.number} tabIndex={0}><div className="mono"><span>{r.number}</span><span>{r.meta}</span></div><h3>{r.title}</h3><p>{r.description}</p></article>)}</div>
        </div>
      </section>

      <section id="about" className="rf-section">
        <div className="sec-head"><span className="mono">04 — THE HUMAN LAYER</span><h2>About</h2></div>
        <div className="about-grid">
          <figure className="portrait-glass"><img src={portraitAsset.url} alt="Portrait of Mojalefa Tswelopele Moletsane" width={768} height={1024} loading="lazy" /><figcaption className="mono">MOJALEFA · JOHANNESBURG</figcaption></figure>
          <div className="about-copy">
            <p className="about-lead">I work where software, AI, data and research meet.</p>
            <p>Currently focused on software development, AI systems, data and research — including AI Software Systems Development work on the Wits–merSETA “Dark Room” project.</p>
            <dl>
              <div><dt className="mono">RESEARCH FOCUS</dt><dd>Skills mapping and forecasting skills-development challenges</dd></div>
              <div><dt className="mono">EDUCATION</dt><dd>Information Technology Certificate (P-SA Software Engineering), ICITP-SA<br />BSc, Wits University</dd></div>
            </dl>
            <ol className="timeline">
              <li><span className="mono">2019</span><b>Chemistry</b><small>BSc Chemistry</small></li>
              <li><span className="mono">2022</span><b>Software Development</b><small>Software development learnership and transition into software</small></li>
              <li><span className="mono">2026</span><b>AI · Systems · Data</b><small>AI software systems development and skills-mapping research</small></li>
            </ol>
          </div>
        </div>
      </section>

      <section id="experimentation" className="rf-section">
        <div className="sec-head"><span className="mono">05 — OPEN STUDIO</span><h2>Experimentation</h2><p>A growing space for mini projects, photographs of my work, and things I am passionate about.</p></div>
        <div className="exp-grid">
          <article tabIndex={0}><FlaskConical aria-hidden="true" /><span className="mono">01 / MINI PROJECTS</span><h3>Studies in progress</h3><p>Small builds and technical experiments will live here.</p></article>
          <article tabIndex={0}><Camera aria-hidden="true" /><span className="mono">02 / PHOTOGRAPHY</span><h3>Through my lens</h3><p>Photographs of work, process, and the details worth keeping.</p></article>
          <article tabIndex={0}><Sparkles aria-hidden="true" /><span className="mono">03 / PASSIONS</span><h3>Beyond the brief</h3><p>A place for the ideas and subjects that keep me curious.</p></article>
        </div>
      </section>

      <footer id="contact" className="rf-contact">
        <p className="mono">06 — FINAL TRANSMISSION</p>
        <h2 style={{ "--d": 0 } as CSSProperties}>Let’s <em>connect.</em></h2>
        <p>Building systems, exploring ideas, and looking for interesting problems to work on.</p>
        <div className="pending-links" aria-label="Contact links will be added when supplied">{["GITHUB", "LINKEDIN", "EMAIL", "CV"].map((l) => <span key={l}>{l}</span>)}</div>
        <div className="footer-line mono"><span>MOJALEFA TSWELOPELE MOLETSANE</span><span>© 2026</span></div>
      </footer>
    </main>
  );
}
