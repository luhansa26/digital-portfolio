import { achievements, certificates, portfolio, projects, skills, socials } from "../lib/content";

type NavigationItem = { label: string; href: string };
type HighlightItem = { label: string; value: string };
type SkillGroup = { category: string; items: Array<{ name: string; level: number }> };
type ProjectItem = { id: string; title: string; summary: string; tags: string[]; metric: string };
type SocialItem = { label: string; href: string };
type AchievementItem = { year: string; title: string; description: string };
type CertificateItem = { name: string; issuer: string; year: string; id: string };

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
    <main className="site-shell">
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

      <section id="top" className="section">
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

          <div className="card" aria-label="Portfolio overview card">
            <p className="eyebrow">Current focus</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy" style={{ marginTop: "0.85rem" }}>
              The portfolio content is now sourced from JSON data files for easier maintenance.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-wrapper">
          <div className="eyebrow">About</div>
          <h2 className="section-title">{aboutTitle}</h2>
          <p className="section-copy" style={{ marginTop: "0.9rem" }}>
            {aboutDescription}
          </p>

          <div className="card-grid" style={{ marginTop: "1.5rem" }}>
            {highlights.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-wrapper">
          <div className="eyebrow">Skills</div>
          <h2 className="section-title">Core capabilities</h2>
          <div className="card-grid" style={{ marginTop: "1.5rem" }}>
            {skillGroups.map((group) => (
              <div key={group.category} className="card">
                <h3 className="section-title" style={{ fontSize: "1.2rem" }}>{group.category}</h3>
                <ul style={{ marginTop: "0.9rem", paddingLeft: "1rem", color: "var(--color-text-muted)" }}>
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
          <div className="eyebrow">Projects</div>
          <div className="card-grid" style={{ marginTop: "1.5rem" }}>
            {projectItems.map((project) => (
              <div key={project.id} className="card">
                <h3 className="section-title" style={{ fontSize: "1.2rem" }}>{project.title}</h3>
                <p className="section-copy" style={{ marginTop: "0.7rem" }}>{project.summary}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.7rem" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="eyebrow" style={{ marginBottom: 0, fontSize: "0.7rem" }}>{tag}</span>
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
          <div className="eyebrow">Achievements</div>
          <div className="card-grid" style={{ marginTop: "1.5rem" }}>
            {achievementItems.map((achievement) => (
              <div key={achievement.title} className="card">
                <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>{achievement.year}</p>
                <h3 className="section-title" style={{ fontSize: "1.1rem" }}>{achievement.title}</h3>
                <p className="section-copy" style={{ marginTop: "0.7rem" }}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="section-wrapper">
          <div className="eyebrow">Certifications</div>
          <div className="card-grid" style={{ marginTop: "1.5rem" }}>
            {certificateItems.map((certificate) => (
              <div key={certificate.id} className="card">
                <h3 className="section-title" style={{ fontSize: "1.1rem" }}>{certificate.name}</h3>
                <p className="section-copy" style={{ marginTop: "0.7rem" }}>{certificate.issuer}</p>
                <p className="section-copy" style={{ marginTop: "0.7rem", color: "var(--color-accent)" }}>
                  {certificate.year} · {certificate.id}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-wrapper">
          <div className="eyebrow">Contact</div>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-copy" style={{ marginTop: "0.9rem" }}>
            Reach out at <a href={`mailto:${contact.email}`} style={{ color: "var(--color-accent)" }}>{contact.email}</a>.
          </p>
          <p className="section-copy" style={{ marginTop: "0.4rem" }}>{contact.availability}</p>

          <div className="hero-actions" style={{ marginTop: "1rem" }}>
            {socialItems.map((social) => (
              <a key={social.label} href={social.href} className="button button--secondary">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}