import React from "react";

function SquareForm( {length} ) {
  return (
    <React.Fragment>
      <div className='input-wrap'>
        <p>Length</p>
        <input type='number' placeholder='Square Length' onChange={e => length(e.target.value)} />
      </div>
    </React.Fragment>
  );
}

export default SquareForm;
