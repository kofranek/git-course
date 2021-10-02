import React, { useState } from 'react';
import Counter from './counter';

const Counters = ({ onReset, counters, ...rest }) => {

  return (
    <div>
      <button onClick={ onReset } className="btn btn-primary btn-sm m-2">Reset</button>
      { counters.map(el => (
        <Counter key={ el.id }
                 { ...el } //spread operator - allows you to add additional parameters
                 { ...rest } //spread operator - instead of onIncrement, onDecrement, onDelete
        >
        </Counter>
      )) }
    </div>
  );
};

export default Counters;
