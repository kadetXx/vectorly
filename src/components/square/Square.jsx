import React, { useState, useEffect } from "react";
import styles from "./Square.module.css";

function Square({ color, length }) {
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    //get total lenght of square
    const perimeter = 4 * length;

    //create styling object for svg animation
    const css = {
      strokeDasharray: perimeter,
      strokeDashoffset: perimeter,
    };

    //set svg animation
    setAnimation(css);
  }, [length]);

  return (
    <div className={styles.squareContainer}>
      <svg width={length} height={length}>
        <rect
          className={styles.square}
          style={animation}
          fill='transparent'
          stroke={color}
          strokeWidth='3'
          width={length}
          height={length}
          x='0'
          y='0'
          preserveAspectRatio='xMidYMid'
        />
      </svg>
    </div>
  );
}

export default Square;
