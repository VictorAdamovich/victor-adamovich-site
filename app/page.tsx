import { CONTACTS, NOW, PROJECTS, ROLES, STACK, YEARS } from "./data";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Send } from "./icons";

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const key = (y: number, m: number) => `${y}-${String(m + 1).padStart(2, "0")}`;

function monthTone(k: string) {
  const role = ROLES.find((r) => k >= r.from && k <= r.to);
  if (k === NOW) return { tone: "var(--accent)", label: "now", role: role?.company.toLowerCase() };
  return role ? { tone: role.tone, label: role.company, role: role.company.toLowerCase() } : null;
}

const LINKS = [
  { href: CONTACTS.github, label: "GitHub", Icon: Github },
  { href: CONTACTS.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: CONTACTS.telegram, label: "Telegram", Icon: Send },
];

function CvButton({ className = "" }: { className?: string }) {
  return (
    <a className={`button ${className}`} href={CONTACTS.cv} download>
      <Download />
      Download CV
    </a>
  );
}

function Matrix() {
  const totalMonths = ROLES.reduce((n, r) => {
    const [fy, fm] = r.from.split("-").map(Number);
    const [ty, tm] = r.to.split("-").map(Number);
    return n + (ty - fy) * 12 + (tm - fm) + 1;
  }, 0);

  return (
    <figure className="matrix-col">
      <div
        className="matrix"
        role="img"
        aria-label={`Work timeline from September 2021 to now, ${totalMonths} months`}
      >
        <span />
        {MONTHS.map((m, i) => (
          <span key={i} className="matrix-month">
            {m}
          </span>
        ))}
        {YEARS.map((y) => (
          <div key={y} className="matrix-row">
            <span className="matrix-year">{y}</span>
            {MONTHS.map((_, m) => {
              const k = key(y, m);
              const t = monthTone(k);
              return (
                <span
                  key={k}
                  className={`dot${t ? "" : " dot-empty"}${k === NOW ? " dot-now" : ""}`}
                  data-role={t?.role}
                  style={t ? { background: t.tone } : undefined}
                  title={t ? `${k} · ${t.label}` : k}
                />
              );
            })}
          </div>
        ))}
      </div>
      <figcaption className="meta small">1 dot = 1 month · red is now</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <a className="brand" href="/" aria-label="Victor Adamovich">
          <span className="brand-mark">VA</span>
          <span className="brand-name">Victor Adamovich</span>
        </a>
        <nav className="actions" aria-label="Contacts">
          <ul className="links">
            {LINKS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a className="link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon />
                  <span className="link-label">{label}</span>
                </a>
              </li>
            ))}
            <li>
              <a className="link" href={`mailto:${CONTACTS.email}`} aria-label={`Email ${CONTACTS.email}`}>
                <Mail />
                <span className="link-label email-full">{CONTACTS.email}</span>
                <span className="link-label email-short">Email</span>
              </a>
            </li>
          </ul>
          <CvButton className="header-cv" />
        </nav>
      </header>

      <section className="top">
        <div className="about">
          <p className="status">
            <span className="live-dot" aria-hidden />
            <span className="status-main">Open to offers</span>
            <span className="meta">Poland / Belarus</span>
          </p>
          <h1 className="name">
            Victor
            <br />
            Adamovich
          </h1>
          <div className="about-bottom">
            <p className="bio">
              Frontend developer with 4.5 years in React and Next.js. I build DeFi swaps, wallet
              connections, checkouts and subscription flows that hold up in production.
            </p>
            <CvButton className="about-cv" />
            <ul className="stack" aria-label="Stack">
              {STACK.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="card experience" aria-labelledby="experience-title">
          <div className="card-header">
            <h2 id="experience-title" className="title">
              Experience
            </h2>
            <span className="meta">09.2021 — 11.2026 · 63 months</span>
          </div>
          <div className="experience-body">
            <Matrix />
            <ol className="roles">
              {ROLES.map((r) => (
                <li key={r.company} className="role" data-role={r.company.toLowerCase()} tabIndex={0}>
                  <span className="role-dot" style={{ background: r.tone }} aria-hidden />
                  <div className="role-text">
                    <div className="role-head">
                      <h3 className="role-company">{r.company}</h3>
                      <span className="meta">{r.period}</span>
                    </div>
                    <p className="role-desc">{r.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </section>

      <section className="work" aria-labelledby="work-title">
        <div className="work-header">
          <h2 id="work-title" className="title">
            Selected work
          </h2>
          <span className="meta">Products I worked on in a team</span>
        </div>
        <ul className="projects">
          {PROJECTS.map((p, i) => (
            <li key={p.domain}>
              <a className="card project" href={p.href} target="_blank" rel="noreferrer">
                <span className="project-top">
                  <span className="meta">{String(i + 1).padStart(2, "0")}</span>
                  <span className="project-arrow">
                    <ArrowUpRight />
                  </span>
                </span>
                <span className="project-text">
                  <span className="project-domain">{p.domain}</span>
                  <span className="project-desc">{p.description}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
