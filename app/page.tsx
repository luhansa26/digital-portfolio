import { achievements, certificates, portfolio, projects, skills, socials } from "../lib/content";

type NavigationItem = { label: string; href: string };
type HighlightItem = { label: string; value: string };
type SkillGroup = { category: string; items: Array<{ name: string; level: number }> };
type ProjectItem = { id: string; title: string; summary: string; tags: string[]; metric: string };
type SocialItem = { label: string; href: string };
type AchievementItem = { year: string; title: string; description: string };
type CertificateItem = { name: string; issuer: string; year: string; id: string };

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
    highlights,
    heroDescription,
    heroBadge,
    aboutTitle,
    aboutDescription,
    title,
    tagline,
    contact,
  } = portfolio as {
    navigation: NavigationItem[];
    highlights: HighlightItem[];
    heroDescription: string;
    heroBadge: string;
    aboutTitle: string;
    aboutDescription: string;
    title: string;
    tagline: string;
    contact: { email: string; availability: string };
  };
  const skillGroups = skills as SkillGroup[];
  const projectItems = projects as ProjectItem[];
  const socialItems = socials as SocialItem[];
  const achievementItems = achievements as AchievementItem[];
  const certificateItems = certificates as CertificateItem[];

  return (
    <main id="top" className="site-shell">
      <header className="site-header">
        <div className="section-wrapper site-nav">
          <a href="#top" className="site-brand">
            <span className="site-brand__dot" aria-hidden="true" />
            <span>{portfolio.name}</span>
          </a>

          <nav className="site-nav-links" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
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

            <div className="card hero-card" aria-label="Portfolio overview card">
              <p className="eyebrow">Current focus</p>
              <h2 className="section-title">{title}</h2>
              <p className="section-copy" style={{ marginTop: "0.85rem" }}>
                The portfolio content is now sourced from JSON data files for easier maintenance.
              </p>

              <div className="hero-meta">
                <div>
                  <span className="meta-label">Availability</span>
                  <strong>{contact.availability}</strong>
                </div>
                <div>
                  <span className="meta-label">Email</span>
                  <strong>{contact.email}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-wrapper">
            <SectionHeader eyebrow="About" title={aboutTitle} copy={aboutDescription} />

            {/* <div className="card-grid" style={{ marginTop: "1.5rem" }}>
              {highlights.map((item) => (
                <div key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div> */}
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
                      <li key={item.name}>{item.name}</li>
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
            <div className="card-grid" style={{ marginTop: "1.5rem" }}>
              {projectItems.map((project) => (
                <div key={project.id} className="card project-card">
                  <h3 className="section-title" style={{ fontSize: "1.2rem" }}>
                    {project.title}
                  </h3>
                  <p className="section-copy" style={{ marginTop: "0.7rem" }}>
                    {project.summary}
                  </p>
                  <div className="pill-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="section-copy" style={{ marginTop: "0.7rem", color: "var(--color-accent)" }}>
                    {project.metric}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="section-wrapper">
            <SectionHeader eyebrow="Achievements" title="A timeline of focused growth" />
            <div className="timeline-list" style={{ marginTop: "1.5rem" }}>
              {achievementItems.map((achievement) => (
                <div key={achievement.title} className="card timeline-card">
                  <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
                    {achievement.year}
                  </p>
                  <h3 className="section-title" style={{ fontSize: "1.1rem" }}>
                    {achievement.title}
                  </h3>
                  <p className="section-copy" style={{ marginTop: "0.7rem" }}>
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="section-wrapper">
            <SectionHeader eyebrow="Certifications" title="Credentials that support the work" />
            <div className="card-grid" style={{ marginTop: "1.5rem" }}>
              {certificateItems.map((certificate) => (
                <div key={certificate.id} className="card">
                  <h3 className="section-title" style={{ fontSize: "1.1rem" }}>
                    {certificate.name}
                  </h3>
                  <p className="section-copy" style={{ marginTop: "0.7rem" }}>
                    {certificate.issuer}
                  </p>
                  <p className="section-copy" style={{ marginTop: "0.7rem", color: "var(--color-accent)" }}>
                    {certificate.year} · {certificate.id}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-wrapper contact-card">
            <SectionHeader eyebrow="Contact" title="Ready to build something dependable" copy="Let’s talk about product quality, platform stability, and thoughtful engineering execution." />
            <div className="hero-actions" style={{ marginTop: "1rem" }}>
              <a href={`mailto:${contact.email}`} className="button button--primary">
                Email {contact.email}
              </a>
              <a href="#top" className="button button--secondary">
                Back to top
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="section-wrapper site-footer__inner">
          <div>
            <a href="#top" className="site-brand">
              <span className="site-brand__dot" aria-hidden="true" />
              <span>{portfolio.name}</span>
            </a>
            <p className="section-copy" style={{ marginTop: "0.75rem" }}>
              {tagline}
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h3 className="footer-title">Navigate</h3>
              <ul className="footer-list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Connect</h3>
              <ul className="footer-list">
                {socialItems.map((social) => (
                  <li key={social.label}>
                    <a href={social.href}>{social.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}