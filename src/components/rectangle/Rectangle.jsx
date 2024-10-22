import React, { useState, useEffect } from "react";
import styles from "./Rectangle.module.css";

function Rectangle({ color, width, height }) {
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    //get total lenght of rectangle
    const perimeter = 2 * (Number(width) + Number(height));

    //create styling object for svg animation
    const css = {
      strokeDasharray: perimeter,
      strokeDashoffset: perimeter,
    };

    //set svg animation
    setAnimation(css);
  }, [height, width]);

  return (
    <div className={styles.rectangleContainer}>
      <svg width={width} height={height}>
        <rect
          className={styles.rectangle}
          style={animation}
          fill='transparent'
          stroke={color}
          strokeWidth='3'
          width={width}
          height={height}
          x='0'
          y='0'
          preserveAspectRatio='xMidYMid'
        />
      </svg>
    </div>
  );
}

export default Rectangle;
