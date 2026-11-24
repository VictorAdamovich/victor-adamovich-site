import { PROFILE } from "@/shared/config";
import { Meta } from "@/shared/ui/text";
import styles from "./footer.module.css";

export function Footer({ year }: { year: number }) {
  return (
    <footer className={styles.footer}>
      <Meta>
        © {year} {PROFILE.name}
      </Meta>
      <Meta>The matrix moves with the calendar</Meta>
    </footer>
  );
}
