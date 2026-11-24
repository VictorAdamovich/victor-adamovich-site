import { PROFILE, STACK } from "@/shared/config";
import { CvButton } from "@/shared/ui/cv-button";
import { Meta } from "@/shared/ui/text";
import styles from "./about.module.css";

export function About() {
  return (
    <div className={styles.about}>
      <p className={styles.status}>
        <span className={styles.liveDot} aria-hidden />
        <span>{PROFILE.status}</span>
        <Meta className={styles.location}>{PROFILE.location}</Meta>
      </p>
      <h1 className={styles.name}>
        {PROFILE.firstName}
        <br />
        {PROFILE.lastName}
      </h1>
      <div className={styles.bottom}>
        <p className={styles.bio}>{PROFILE.bio}</p>
        <CvButton className={styles.cv} />
        <ul className={styles.stack} aria-label="Stack">
          {STACK.map((s) => (
            <li key={s} className={styles.tag}>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
