import { useState, useEffect, useRef } from "react";
import styles from "./PreviousValueTracker.module.css";

function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    // Save the previous count before updating
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Previous Value Tracker</h2>

        <div className={styles.values}>
          <div className={`${styles.box} ${styles.current}`}>
            <span className={styles.label}>Current</span>
            <span className={styles.number}>{count}</span>
          </div>

          <div className={`${styles.box} ${styles.previous}`}>
            <span className={styles.label}>Previous</span>
            <span className={styles.number}>
              {prevCount === undefined ? "-" : prevCount}
            </span>
          </div>
        </div>

        <button className={styles.button} onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default PreviousValueTracker;