import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, MapPin, Moon, Network, Sparkles, Sun } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import portraitAsset from "@/assets/mojalefa-portrait.jpeg.asset.json";
import dayLandscape from "@/assets/highveld-day.jpg";
import nightLandscape from "@/assets/highveld-night.jpg";
import spaceshipImage from "@/assets/spaceship.png";

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
  { number: "01", title: "Taxonomy Platform", meta: "Software · Backend · Data Systems", description: "Building a system for connecting occupations, skills and specialisations." },
  { number: "02", title: "Job Finder App", meta: "Software · AI · Data", description: "A personal project exploring job discovery and search, connected to the direction of skills-mapping work." },
  { number: "03", title: "Future Skills Map", meta: "AI · Systems · Research", description: "An AI and data-driven initiative connecting occupations, skills and labour-market information to understand skills-development challenges." },
  { number: "04", title: "AI Systems", meta: "AI · LLM · Software Systems", description: "Work around LLMs, NLP, document-based systems, APIs, validation and related AI software." },
];

const research = [
  { number: "R/01", title: "Skills Mapping & Forecasting", meta: "AI · Data · Labour Markets", description: "How data, AI and computational methods can improve the mapping of skills, occupations and labour-market demand." },
  { number: "R/02", title: "Labour-Market Data & Skills Taxonomies", meta: "Data · AI/NLP · Research", description: "The technical, methodological, legal and ethical challenges of external labour-market and occupational data for skills-mapping systems in South Africa." },
];

const navItems = ["work", "research", "about", "contact"];

function KineticLine({ children, start = 0 }: { children: string; start?: number }) {
  return (
    <span className="kinetic-line">
      {children.split("").map((letter, index) => (
        <span key={`${letter}-${index}`} style={{ animationDelay: `${(start + index) * 0.025}s` }}>
          {letter === " " ? "\u00a0" : letter}
        </span>
      ))}
    </span>
  );
}

function ShipJourney() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  const phase = progress * 5;
  const leg = Math.min(4, Math.floor(phase));
  const local = phase - leg;
  const movingRight = leg % 2 === 0;
  const x = movingRight ? 8 + local * 76 : 84 - local * 76;
  return (
    <div className="ship-journey" style={{ transform: `translate3d(${x}vw, ${8 + progress * 76}vh, 0)` }} aria-hidden="true">
      <span className="ship-trail" />
      <img src={spaceshipImage} alt="" width={1152} height={576} className={movingRight ? "ship-right" : "ship-left"} />
    </div>
  );
}

function Portfolio() {
  const [active, setActive] = useState("work");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [heroProgress, setHeroProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100, label: "" });
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const initialTheme = stored === "dark" || stored === "light"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => setCursor((current) => ({ ...current, x: event.clientX, y: event.clientY }));
    const onScroll = () => setHeroProgress(Math.min(1, window.scrollY / Math.max(window.innerHeight * 0.9, 1)));
    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { threshold: [0.25, 0.5] });
    navItems.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => { window.removeEventListener("pointermove", onMove); window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return (
    <main ref={mainRef} className="portfolio-shell">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className="floating-nav" aria-label="Portfolio sections">
        <div className="nav-links">{navItems.map((item) => <a key={item} href={`#${item}`} className={active === item ? "active" : ""}>{item}</a>)}</div>
        <span className="nav-divider" aria-hidden="true" />
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          <Sun className="theme-sun" size={16} aria-hidden="true" />
          <Moon className="theme-moon" size={16} aria-hidden="true" />
        </button>
      </nav>
      <div className={`custom-cursor ${cursor.label ? "cursor-expanded" : ""}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}>{cursor.label}</div>
      <ShipJourney />

      <header className="sky-hero" id="main-content" style={{ "--hero-progress": heroProgress } as CSSProperties}>
        <img src={dayLandscape} alt="Sunlit South African mountain landscape with green highveld vegetation" width={1920} height={1280} className="sky-image sky-image-day" />
        <img src={nightLandscape} alt="Moonlit South African mountain landscape beneath stars and a crescent moon" width={1920} height={1280} className="sky-image sky-image-night" />
        <div className="sky-overlay" />
        <div className="data-field" aria-hidden="true">{Array.from({ length: 16 }, (_, index) => <i key={index} />)}</div>
        <div className="hero-content">
          <div className="hero-topline"><span>MOJALEFA TSWELOPELE MOLETSANE</span><span className="location"><MapPin size={13} aria-hidden="true" />JOHANNESBURG · ZA</span></div>
          <h1 aria-label="I build systems that make complexity useful."><KineticLine>I BUILD SYSTEMS</KineticLine><KineticLine start={15}>THAT MAKE</KineticLine><em><KineticLine start={24}>COMPLEXITY USEFUL.</KineticLine></em></h1>
          <div className="hero-footer">
            <p>Software development, AI research and data-driven systems focused on turning complex information into useful, understandable tools.</p>
            <a href="#what-i-do">EXPLORE <ArrowDown size={14} /></a>
          </div>
        </div>
      </header>

      <section id="what-i-do" className="statement-section section-light">
        <div className="section-kicker"><span>01 / ORIENTATION</span><span>SYSTEMS THINKING</span></div>
        <p className="interactive-statement" aria-label="I turn complex information into useful systems.">
          {"I turn complex information into useful systems.".split("").map((letter, index) => <span key={`${letter}-${index}`} style={{ transitionDelay: `${index * 0.015}s` }}>{letter === " " ? "\u00a0" : letter}</span>)}
        </p>
        <div className="capability-row">
          <span>SOFTWARE DEVELOPMENT</span><span>AI SYSTEMS</span><span>DATA</span><span>RESEARCH</span>
        </div>
      </section>

      <section id="work" className="work-section section-light">
        <div className="section-heading"><span className="section-number">02</span><div><p>SELECTED SYSTEMS</p><h2>Work</h2></div><p className="section-intro">Engineering, product thinking and research-led software.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article key={project.number} className="project-row" tabIndex={0} onPointerEnter={() => setCursor((c) => ({ ...c, label: "VIEW ↗" }))} onPointerLeave={() => setCursor((c) => ({ ...c, label: "" }))}>
              <span className="mono">{project.number}</span>
              <div><h3>{project.title}</h3><p>{project.description}</p></div>
              <div className="project-meta"><span>{project.meta}</span><ArrowUpRight size={22} aria-hidden="true" /></div>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="research-grid" aria-hidden="true" />
        <div className="section-heading dark-heading"><span className="section-number">03</span><div><p>INTERACTIVE NOTEBOOK</p><h2>Research</h2></div><p className="section-intro">Understanding the relationships between people, skills, work and systems.</p></div>
        <div className="research-body">
          <div className="network-map" aria-label="Research relationships: skills connect to occupations, industry, education and labour market">
            <Network size={26} aria-hidden="true" />
            <span className="node node-skills">SKILLS</span><span className="node node-occupations">OCCUPATIONS</span><span className="node node-industry">INDUSTRY</span><span className="node node-education">EDUCATION</span><span className="node node-market">LABOUR MARKET</span>
            <svg viewBox="0 0 600 420" aria-hidden="true"><path d="M300 65 L180 185 L430 175 L270 330 M180 185 L270 330 M430 175 L270 330 M300 65 L430 175" /></svg>
          </div>
          <div className="research-list">{research.map((item) => <article key={item.number}><div><span>{item.number}</span><span>{item.meta}</span></div><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="sunburst" aria-hidden="true"><Sparkles /></div>
        <div className="section-heading"><span className="section-number">04</span><div><p>THE HUMAN LAYER</p><h2>About</h2></div></div>
        <div className="about-layout">
          <div className="about-copy">
            <p className="about-lead">I work where software, AI, data and research meet.</p>
            <p>Currently focused on software development, AI systems, data and research — including AI Software Systems Development work on the Wits–merSETA “Dark Room” project.</p>
            <dl><div><dt>RESEARCH FOCUS</dt><dd>Skills mapping and forecasting skills-development challenges</dd></div><div><dt>EDUCATION</dt><dd>Information Technology Certificate (P-SA Software Engineering), ICITP-SA<br />BSc, Wits University</dd></div></dl>
          </div>
          <figure className="polaroid"><img src={portraitAsset.url} alt="Portrait of Mojalefa Tswelopele Moletsane" width={768} height={1024} loading="lazy" /><figcaption>MOJALEFA · JOHANNESBURG</figcaption></figure>
        </div>
        <div className="timeline" aria-label="Career timeline">
          <article><span>2019</span><h3>Chemistry</h3><p>BSc Chemistry</p></article>
          <article><span>2022</span><h3>Software Development</h3><p>Software development learnership and transition into software</p></article>
          <article><span>2026</span><h3>AI · Systems · Data</h3><p>AI software systems development and skills-mapping research</p></article>
        </div>
      </section>

      <footer id="contact" className="contact-section">
        <div className="constellation" aria-hidden="true"><i /><i /><i /><i /><i /><svg viewBox="0 0 400 220"><path d="M45 150 L128 62 L210 132 L304 45 L360 155 L210 132 L45 150" /></svg></div>
        <p className="mono">05 / FINAL TRANSMISSION</p>
        <h2>LET’S<br /><em>CONNECT.</em></h2>
        <p>Building systems, exploring ideas, and looking for interesting problems to work on.</p>
        <div className="pending-links" aria-label="Contact links will be added when supplied"><span>GITHUB</span><span>LINKEDIN</span><span>EMAIL</span><span>CV</span></div>
        <div className="footer-line"><span>MOJALEFA TSWELOPELE MOLETSANE</span><span>© 2026</span></div>
      </footer>
    </main>
  );
}