import { toneVar } from "@/shared/config";
import { Meta, Title } from "@/shared/ui/text";
import { formatPeriod, roleId } from "../lib/role";
import type { Role } from "../model/types";
import styles from "./role-item.module.css";

/** A role in the list; `data-role` lets the matrix light up its months on hover. */
export function RoleItem({ role }: { role: Role }) {
  return (
    <li className={styles.role} data-role={roleId(role)} tabIndex={0}>
      <span className={styles.dot} style={{ background: toneVar(role.tone) }} aria-hidden />
      <div className={styles.text}>
        <div className={styles.head}>
          <Title as="h3">{role.company}</Title>
          <Meta>{formatPeriod(role)}</Meta>
        </div>
        <p className={styles.description}>{role.description}</p>
      </div>
    </li>
  );
}
