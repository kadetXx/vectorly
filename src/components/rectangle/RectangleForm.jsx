import React from "react";

function RectangleForm({ width, height }) {
  return (
    <React.Fragment>
      <div className="input-wrap double">
        <p>Dimensions</p>
        <input
          type="number"
          placeholder="Input Width"
          onChange={(e) => width(e.target.value)}
        />

        <input
          type="number"
          placeholder="Input Height"
          onChange={(e) => height(e.target.value)}
        />
      </div>
    </React.Fragment>
  );
}

export default RectangleForm;
