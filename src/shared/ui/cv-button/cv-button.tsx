import { CONTACTS } from "@/shared/config";
import { cx } from "@/shared/lib/css";
import { Download } from "@/shared/ui/icons";
import styles from "./cv-button.module.css";

/** Pass a className to place or hide it; use two classes there to win over `display`. */
export function CvButton({ className }: { className?: string }) {
  return (
    <a className={cx(styles.button, className)} href={CONTACTS.cv} download>
      <Download />
      Download CV
    </a>
  );
}
