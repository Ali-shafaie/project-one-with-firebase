// styles
import styles from "./Home.module.css";
import TransictionForm from "./TransictionForm";

import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>transition</div>
      <div className={styles.sidebar}>
        <TransictionForm uid={user.uid} />
      </div>
    </div>
  );
}
