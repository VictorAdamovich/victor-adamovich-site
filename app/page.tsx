import { CONTACTS, ROLES, STACK, getTimeline } from "./data";
import { Download, Github, Linkedin, Mail, Send } from "./icons";

// Rebuilt on Vercel at most once a day (ISR), so the matrix moves with the calendar.
export const revalidate = 86400;

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

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

function Matrix({ timeline }: { timeline: ReturnType<typeof getTimeline> }) {
  return (
    <figure className="matrix-col">
      <div
        className="matrix"
        role="img"
        aria-label={`Work timeline ${timeline.range}, ${timeline.months} months`}
      >
        <span />
        {MONTHS.map((m, i) => (
          <span key={i} className="matrix-month">
            {m}
          </span>
        ))}
        {timeline.years.map((y) => (
          <div key={y} className="matrix-row">
            <span className="matrix-year">{y}</span>
            {MONTHS.map((_, m) => {
              const t = timeline.at(y, m);
              const key = `${y}-${m}`;
              if (!t) return <span key={key} className="dot dot-empty" />;
              return (
                <span
                  key={key}
                  className={`dot${t.isNow ? " dot-now" : ""}`}
                  data-role={t.role.company.toLowerCase()}
                  style={{ background: t.isNow ? "var(--accent)" : t.role.tone }}
                  title={`${t.key} · ${t.isNow ? "now" : t.role.company}`}
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
  const timeline = getTimeline();

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
            <span className="meta">
              {timeline.range} · {timeline.months} months
            </span>
          </div>
          <div className="experience-body">
            <Matrix timeline={timeline} />
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

      <footer className="footer">
        <span className="meta">© {timeline.now.slice(0, 4)} Victor Adamovich</span>
        <span className="meta">The matrix moves with the calendar</span>
      </footer>
    </main>
  );
}
