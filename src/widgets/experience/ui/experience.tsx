import { ROLES, RoleItem, type Timeline, roleId } from "@/entities/role";
import { Meta, Title } from "@/shared/ui/text";
import { highlightCss } from "../lib/highlight-css";
import styles from "./experience.module.css";
import { Matrix } from "./matrix";

const HIGHLIGHT_CSS = highlightCss(ROLES.map(roleId), { root: styles.experience, dot: styles.dot });

export function Experience({ timeline }: { timeline: Timeline }) {
  return (
    <section className={styles.experience} aria-labelledby="experience-title">
      <style>{HIGHLIGHT_CSS}</style>
      <div className={styles.header}>
        <Title as="h2" id="experience-title">
          Experience
        </Title>
        <Meta>{timeline.range}</Meta>
      </div>
      <div className={styles.body}>
        <Matrix timeline={timeline} />
        <ol className={styles.roles}>
          {ROLES.map((role) => (
            <RoleItem key={roleId(role)} role={role} />
          ))}
        </ol>
      </div>
    </section>
  );
}
