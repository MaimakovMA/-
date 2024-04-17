import styles from "./ErrorCounter.module.css";
import { useSelector } from "react-redux";

export const ErrorCounter = () => {
  const errors = useSelector(state => state.game.errors);

  return (
    <div className={styles.container}>
      <svg
        className={errors === 3 ? styles.delete : styles.heart}
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
      >
        <path d="M11 0.000244141L21.2705 12.7817L11 25.4994L0.729503 12.7817L11 0.000244141Z" fill="#FF4545" />
      </svg>
      <svg
        className={errors === 2 || errors === 3 ? styles.delete : styles.heart}
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
      >
        <path d="M11 0.000244141L21.2705 12.7817L11 25.4994L0.729503 12.7817L11 0.000244141Z" fill="#FF4545" />
      </svg>
      <svg
        className={errors === 1 || errors === 2 ? styles.delete : styles.heart}
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
      >
        <path d="M11 0.000244141L21.2705 12.7817L11 25.4994L0.729503 12.7817L11 0.000244141Z" fill="#FF4545" />
      </svg>
    </div>
  );
};
