"use client";

import { FormEvent, useState } from "react";
import { achievements, certificates, portfolio, projects, skills, socials } from "../lib/content";

type NavigationItem = { label: string; href: string };
type SkillGroup = { category: string; items: Array<{ name: string; level: number }> };
type ProjectItem = { id: string; title: string; summary: string; tags: string[]; metric: string; featured?: boolean; repo?: string; live?: string; linkedin?: string };
type SocialItem = { label: string; href: string };
type AchievementItem = { year: string; title: string; description: string; image?: string };
type CertificateItem = { name: string; issuer: string; year: string; id: string; image?: string; link?: string };

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy" style={{ marginTop: "0.9rem" }}>{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  const {
    navigation,
    heroDescription,
    heroBadge,
    aboutTitle,
    title,
    tagline,
    contact,
  } = portfolio as {
    navigation: NavigationItem[];
    heroDescription: string;
    heroBadge: string;
    aboutTitle: string;
    title: string;
    tagline: string;
    contact: { email: string; availability: string };
  };
  const skillGroups = skills as SkillGroup[];
  const projectItems = projects as ProjectItem[];
  const featuredProjects = projectItems.filter((p) => (p as any).featured);
  const otherProjects = projectItems.filter((p) => !(p as any).featured);
  const socialItems = socials as SocialItem[];
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const achievementItems = achievements as AchievementItem[];
  const featuredAchievements = achievementItems.slice(0, 3);
  const otherAchievements = achievementItems.slice(3);
  const certificateItems = certificates as CertificateItem[];

  const openContactModal = () => setModalOpen(true);
  const closeContactModal = () => setModalOpen(false);
  const handleFormChange = (field: keyof typeof formValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("Portfolio inquiry from website");
    const body = encodeURIComponent(`Name: ${formValues.name}\nEmail: ${formValues.email}\n\n${formValues.message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setModalOpen(false);
  };

  return (
    <main id="top" className="site-shell">
      <header className="site-header">
        <div className="section-wrapper site-nav">
          <a href="#top" className="site-brand">
            <span className="site-brand__dot" aria-hidden="true" />
            <span>{portfolio.name}</span>
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav-links ${navOpen ? "open" : ""}`} aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setNavOpen(false)}>
                {item.label}
              </a>
            ))}
            <button type="button" className="button button--primary" onClick={() => { openContactModal(); setNavOpen(false); }}>
              Get in touch
            </button>
          </nav>
        </div>
      </header>

      <div className="site-content">
        <section id="hero" className="section">
          <div className="section-wrapper hero-grid">
            <div>
              <div className="eyebrow">{heroBadge}</div>
              <h1 className="hero-title">
                <span>{tagline}</span>
              </h1>
              <p className="section-copy">{heroDescription}</p>
              <div className="hero-actions">
                <a href="#projects" className="button button--primary">
                  View Projects
                </a>
                <a href="#contact" className="button button--secondary">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="status-panel bracket" aria-label="Portfolio overview card">
              <div className="status-head">
                <span>status.log</span>
                <span className="lights"><i></i><i></i></span>
              </div>

              <div className="status-row"><span className="k">role</span><span className="v">{(portfolio as any).role}</span></div>
              <div className="status-row"><span className="k">based_in</span><span className="v">{(portfolio as any).based_in}</span></div>
              <div className="status-row"><span className="k">experience</span><span className="v">{(portfolio as any).experience}</span></div>

              <div className="stack-ticker">
                <span>currently_shipping: {(portfolio as any).currently_shipping}</span>
                <span className="cursor" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-wrapper">
            <SectionHeader eyebrow="About" title={aboutTitle} />

            <div className="about-grid" style={{ marginTop: "1.5rem" }}>
              <div className="about-photo bracket">
                {(portfolio as any).profileImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={(portfolio as any).profileImage} alt={`${portfolio.name} profile`} />
                ) : (
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="36" r="18" stroke="#5EEAD4" strokeWidth="1.5" />
                    <path d="M18 88C18 68 32 58 50 58C68 58 82 68 82 88" stroke="#5EEAD4" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="46" stroke="#1E2A42" strokeWidth="1" />
                  </svg>
                )}
              </div>

              <div className="about-text">
                {(portfolio as any).pullQuote ? (
                  <div className="pull">{(portfolio as any).pullQuote}</div>
                ) : null}

                {((portfolio as any).aboutParagraphs || []).map((p: string, i: number) => (
                  <p key={i} className="section-copy" style={{ marginTop: i === 0 ? 0 : "0.9rem" }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-wrapper">
            <SectionHeader eyebrow="Skills" title="Core capabilities" />
            <div className="card-grid" style={{ marginTop: "1.5rem" }}>
              {skillGroups.map((group) => (
                <div key={group.category} className="card">
                  <h3 className="section-title" style={{ fontSize: "1.2rem" }}>
                    {group.category}
                  </h3>
                  <ul className="section-list">
                    {group.items.map((item) => (
                      <li key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span>{item.name}</span>
                        <div className="meter" aria-hidden>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i key={i} className={i < item.level ? "on" : ""} />
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-wrapper">
            <SectionHeader eyebrow="Projects" title="Selected builds and product work" />
            {/* Featured projects (up to 3) */}
            {featuredProjects && featuredProjects.length > 0 ? (
              <div className="card-grid featured-grid" style={{ marginTop: "1.5rem" }}>
                {featuredProjects.map((project, idx) => (
                  <div key={project.id} className="card project-card bracket">
                    <div className="project-top">
                      <span className="idx mono">{`PRJ-${String(idx + 1).padStart(2, "0")}`}</span>
                      <div className="project-links">
                        {project.repo ? <a href={project.repo} target="_blank" rel="noopener noreferrer">Code</a> : <a href="#">Code</a>}
                        {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a> : null}
                      </div>
                    </div>

                    <h3 className="section-title" style={{ fontSize: "1.2rem" }}>{project.title}</h3>
                    <p className="section-copy" style={{ marginTop: "0.7rem" }}>{project.summary}</p>

                    <div className="tag-row" style={{ marginTop: "0.9rem" }}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <div className="project-metric mono">→ {project.metric}</div>
                      { (project.repo || project.linkedin || project.live) ? (
                        <div className="project-button-wrap">
                          <a className="button button--secondary" href={project.repo || project.live || project.linkedin} target="_blank" rel="noopener noreferrer">View details</a>
                        </div>
                      ) : null }
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {/* All other projects */}
            {otherProjects && otherProjects.length > 0 ? (
              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  className="button button--secondary"
                  onClick={() => setShowAllProjects((prev) => !prev)}
                  style={{ marginBottom: '1rem' }}
                >
                  {showAllProjects ? 'Hide all projects' : 'Show all projects'}
                </button>
                {showAllProjects ? (
                  <div>
                    <h3 style={{ marginBottom: '1rem' }} className="section-title">All projects</h3>
                    <div className="card-grid projects-grid">
                      {otherProjects.map((project, idx) => (
                        <div key={project.id} className="card project-card bracket">
                          <div className="project-top">
                            <span className="idx mono">{`PRJ-${String(idx + 1 + featuredProjects.length).padStart(2, "0")}`}</span>
                            <div className="project-links">
                              {project.repo ? <a href={project.repo} target="_blank" rel="noopener noreferrer">Code</a> : <a href="#">Code</a>}
                              {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a> : null}
                            </div>
                          </div>

                          <h3 className="section-title" style={{ fontSize: "1.2rem" }}>{project.title}</h3>
                          <p className="section-copy" style={{ marginTop: "0.7rem" }}>{project.summary}</p>

                          <div className="tag-row" style={{ marginTop: "0.9rem" }}>
                            {project.tags.map((tag) => (
                              <span key={tag} className="tag">{tag}</span>
                            ))}
                          </div>

                          <div className="project-actions">
                            <div className="project-metric mono">→ {project.metric}</div>
                            { (project.repo || project.linkedin || project.live) ? (
                              <div className="project-button-wrap">
                                <a className="button button--secondary" href={project.repo || project.live || project.linkedin} target="_blank" rel="noopener noreferrer">View details</a>
                              </div>
                            ) : null }
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="section-wrapper">
            <SectionHeader eyebrow="Achievements" title="A view of focused growth" />
            <div className="card-grid achievements-grid" style={{ marginTop: "1.5rem" }}>
              {featuredAchievements.map((achievement) => (
                <div key={achievement.title} className="card achievement-card bracket">
                  {achievement.image ? (
                    <img className="achievement-image" src={achievement.image} alt={achievement.title} />
                  ) : (
                    <div className="achievement-media fallback">
                      <span>{achievement.year}</span>
                    </div>
                  )}
                  <span className="achievement-year mono">{achievement.year}</span>
                  <h3 className="project-metric mono" style={{ fontSize: "1.1rem", marginTop: "0.8rem" }}>{achievement.title}</h3>
                  <p className="section-copy" style={{ marginTop: "0.85rem" }}>{achievement.description}</p>
                </div>
              ))}
            </div>

            {otherAchievements.length > 0 ? (
              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  className="button button--secondary"
                  onClick={() => setShowAllAchievements((prev) => !prev)}
                  style={{ marginBottom: '1rem' }}
                >
                  {showAllAchievements ? 'Hide all achievements' : 'View all achievements'}
                </button>
                {showAllAchievements ? (
                  <div className="card-grid achievements-grid" style={{ marginTop: "1rem" }}>
                    {otherAchievements.map((achievement) => (
                      <div key={achievement.title} className="card achievement-card bracket">
                        {achievement.image ? (
                          <img className="achievement-image" src={achievement.image} alt={achievement.title} />
                        ) : (
                          <div className="achievement-media fallback">
                            <span>{achievement.year}</span>
                          </div>
                        )}
                        <span className="achievement-year mono">{achievement.year}</span>
                        <h3 className="section-title" style={{ fontSize: "1.1rem", marginTop: "0.8rem" }}>{achievement.title}</h3>
                        <p className="section-copy" style={{ marginTop: "0.85rem" }}>{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="section-wrapper">
            <SectionHeader eyebrow="Certifications" title="Credentials that support the work" />
            <div className="card-grid" style={{ marginTop: "1.5rem" }}>
              {certificateItems.map((certificate) => (
                <div key={certificate.id} className="cert-card">
                  {certificate.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="cert-image" src={certificate.image} alt={certificate.name} />
                  ) : (
                    <div className="cert-icon mono">{certificate.issuer.split(' ')[0]}</div>
                  )}
                  <h3 className="section-title" style={{ fontSize: "1.1rem" }}>{certificate.name}</h3>
                  <p className="section-copy" style={{ marginTop: "0.7rem" }}>{certificate.issuer}</p>
                  <div className="cert-meta"><span>{certificate.year}</span><span>ID: {certificate.id}</span></div>
                  {certificate.link ? (
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="button button--secondary cert-cta">
                      View certificate
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-wrapper contact-card">
            <SectionHeader eyebrow="Contact" title="Ready to build something dependable" copy="Let’s talk about product quality, platform stability, and thoughtful engineering execution." />
            <div className="hero-actions" style={{ marginTop: "1rem" }}>
              <button type="button" className="button button--primary" onClick={openContactModal}>
                Get in touch
              </button>
              <a href="#top" className="button button--secondary">
                Back to top
              </a>
            </div>
          </div>
        </section>

        {modalOpen ? (
          <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <div className="modal-content">
              <button type="button" className="modal-close" onClick={closeContactModal} aria-label="Close form">
                ×
              </button>
              <h2 id="contact-modal-title">Send a message</h2>
              <form onSubmit={handleFormSubmit} className="contact-form">
                <label>
                  Name
                  <input type="text" value={formValues.name} onChange={(event) => handleFormChange("name", event.target.value)} required />
                </label>
                <label>
                  Email
                  <input type="email" value={formValues.email} onChange={(event) => handleFormChange("email", event.target.value)} required />
                </label>
                <label>
                  Message
                  <textarea value={formValues.message} onChange={(event) => handleFormChange("message", event.target.value)} rows={5} required />
                </label>
                <div className="contact-form-actions">
                  <button type="submit" className="button button--primary">Send email</button>
                  <button type="button" className="button button--secondary" onClick={closeContactModal}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>

      <footer className="site-footer">
        <div className="section-wrapper site-footer__inner">
          <div className="footer-col footer-col--brand">
            <a href="#top" className="site-brand">
              <span className="site-brand__dot" aria-hidden="true" />
              <span>{portfolio.name}</span>
            </a>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Navigate</h3>
            <ul className="footer-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Elsewhere</h3>
            <ul className="footer-list">
              {socialItems.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-list">
              <li>
                <a href={`mailto:${contact.email}`}>Email</a>
              </li>
              <li>
                <button type="button" className="footer-link-button" onClick={openContactModal}>Get in touch</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-wrapper footer-bottom">
          <span>© {new Date().getFullYear()} {portfolio.name}. Built from scratch, no template.</span>
          <span className="footer-status">
            <span className="status-dot" aria-hidden="true" />
            system status: {contact.availability.toLowerCase()}
          </span>
        </div>
      </footer>
    </main>
  );
}
