import React from "react";

function RectangleForm({ width, height }) {
  return (
    <React.Fragment>
      <div className='input-wrap'>
        <p>Width</p>
        <input
          type='number'
          placeholder='Input Width'
          onChange={(e) => width(e.target.value)}
        />
      </div>

      <div className='input-wrap'>
        <p>Height</p>
        <input
          type='number'
          placeholder='Input Height'
          onChange={(e) => height(e.target.value)}
        />
      </div>
    </React.Fragment>
  );
}

export default RectangleForm;
