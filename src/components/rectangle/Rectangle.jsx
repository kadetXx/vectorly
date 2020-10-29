import React, {useEffect} from "react";
import styles from "./Rectangle.module.css";



function Rectangle({ width, height }) {

  useEffect(() => {
    console.log('hello');
  }, [])

  return (
    <div className={styles.rectangleContainer}>
      <svg width={width} height={height}>
        <rect
          className={styles.rectangle}
          fill='transparent'
          stroke='#000000'
          stroke-width='3'
          width={width}
          height={height}
          x="0" 
          y="0"
         preserveAspectRatio="xMidYMid"

        />
      </svg>
    </div>
  );
}

export default Rectangle;
