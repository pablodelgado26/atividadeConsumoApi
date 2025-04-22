import HPList from "../components/hpList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HPList />
      </main>

    </div>
  );
}