import React, { useState } from 'react';
import Counter from './counter';

const Counters = (props) => {

  return (
    <div>
      <button onClick={ props.onReset } className="btn btn-primary btn-sm m-2">Reset</button>
      { props.counters.map(el => (
        <Counter key={ el.id }
                 { ...el } //spread operator - allows you to add additional parameters
                 onDelete={ props.onDelete }
                 onIncrement={props.onIncrement}
                 onDecrement={props.onDecrement}
        >
        </Counter>
      )) }
    </div>
  );
};

export default Counters;
