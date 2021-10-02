import React, { useState } from 'react';
import Counter from './counter';

const Counters = ({onReset, counters, onDelete, onIncrement, onDecrement}) => {

  return (
    <div>
      <button onClick={ onReset } className="btn btn-primary btn-sm m-2">Reset</button>
      { counters.map(el => (
        <Counter key={ el.id }
                 { ...el } //spread operator - allows you to add additional parameters
                 onDelete={ onDelete }
                 onIncrement={onIncrement}
                 onDecrement={onDecrement}
        >
        </Counter>
      )) }
    </div>
  );
};

export default Counters;
