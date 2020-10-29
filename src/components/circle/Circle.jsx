import React from "react";
import styles from "./Circle.module.css";

function Circle() {
  return (
    <div className={styles.circleContainer}>
      <svg width={142} height={142}>
        <title>Circle</title>
        <circle
          cx='71'
          cy='71'
          fill='transparent'
          r='70'
          stroke='#000000'
          strokeWidth='2'
          className={styles.circle}
        />
      </svg>
    </div>
  );
}

export default Circle;
