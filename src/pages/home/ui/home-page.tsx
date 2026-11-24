import { timelineAt } from "@/entities/role";
import { yearOf } from "@/shared/lib/month";
import { About } from "@/widgets/about";
import { Experience } from "@/widgets/experience";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import styles from "./home-page.module.css";

export function HomePage() {
  const timeline = timelineAt(new Date());

  return (
    <main className={styles.page}>
      <Header />
      <section className={styles.top}>
        <About />
        <Experience timeline={timeline} />
      </section>
      <Footer year={yearOf(timeline.now)} />
    </main>
  );
}
