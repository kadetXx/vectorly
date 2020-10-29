import React from "react";

function CircleForm( {radius} ) {
  return (
    <React.Fragment>
      <div className='input-wrap'>
        <p>Radius</p>
        <input type='number' placeholder='Input Circle Radius' onChange={e => radius(e.target.value)} />
      </div>
    </React.Fragment>
  );
}

export default CircleForm;
