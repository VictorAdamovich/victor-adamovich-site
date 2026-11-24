import { CONTACTS, PROFILE } from "@/shared/config";
import { cx } from "@/shared/lib/css";
import { CvButton } from "@/shared/ui/cv-button";
import { Github, Linkedin, Mail, Send } from "@/shared/ui/icons";
import { Title } from "@/shared/ui/text";
import styles from "./header.module.css";

const LINKS = [
  { href: CONTACTS.github, label: "GitHub", Icon: Github },
  { href: CONTACTS.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: CONTACTS.telegram, label: "Telegram", Icon: Send },
];

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/" aria-label={PROFILE.name}>
        <span className={styles.mark}>{PROFILE.initials}</span>
        <Title className={styles.name}>{PROFILE.name}</Title>
      </a>
      <nav className={styles.actions} aria-label="Contacts">
        <ul className={styles.links}>
          {LINKS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a className={styles.link} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
                <span className={styles.label}>{label}</span>
              </a>
            </li>
          ))}
          <li>
            <a className={styles.link} href={CONTACTS.mailto} aria-label={`Email ${CONTACTS.email}`}>
              <Mail />
              <span className={cx(styles.label, styles.emailFull)}>{CONTACTS.email}</span>
              <span className={cx(styles.label, styles.emailShort)}>Email</span>
            </a>
          </li>
        </ul>
        <CvButton className={styles.cv} />
      </nav>
    </header>
  );
}
