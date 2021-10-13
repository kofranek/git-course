import React, { useState } from 'react';
import Counter from './counter';

const Counters = (props) => {
    console.log('Counters props=',props)
  return (
    <div>
      <button
        onClick={ props.onReset }
        className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      { props.counters.map((counter, index) => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
          name={counter.name}
          nameCzech={counter.nameCzech}
          onDecrement={props.onDecrement}
          onIncrement={props.onIncrement}
          onDelete={props.onDelete}
        >
        </Counter>
      )) }
    </div>
  );
};

export default Counters;
