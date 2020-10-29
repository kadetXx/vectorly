import React, { useState, useEffect } from "react";
import styles from "./Circle.module.css";

function Circle({ color, radius }) {
  const [diameter, setDiameter] = useState(0);
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    //calculate diameter from given radius
    setDiameter(Number(radius) * 2);

    //get total lenght of circle
    const perimeter = 2 * 3.14159265358979 * Number(radius);

    //create styling object for svg animation
    const css = {
      strokeDasharray: perimeter,
      strokeDashoffset: perimeter,
    };

    //set svg animation
    setAnimation(css);
  }, [radius]);

  return (
    <div className={styles.circleContainer}>
      <svg width={diameter + 4} height={diameter + 4}>
        <title>Circle</title>
        <circle
          cx={Number(radius) + 2}
          cy={Number(radius) + 2}
          fill='transparent'
          r={radius}
          stroke={color}
          strokeWidth='2'
          className={styles.circle}
          style={animation}
        />
      </svg>
    </div>
  );
}

export default Circle;
