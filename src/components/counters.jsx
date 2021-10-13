import React, { useState } from 'react';
import Counter from './counter';

const Counters = ({onReset, counters, ...rest }) => {
    console.log('Counters counters=',counters,'onReset=',onReset, 'rest=',rest)
  return (
    <div>
      <button
        onClick={ onReset }
        className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      { counters.map((counter, index) => (
        <Counter
          key={counter.id}
          // id={counter.id}
          // value={counter.value}
          // name={counter.name}
          // nameCzech={counter.nameCzech}
          // onDecrement={props.onDecrement}
          // onIncrement={props.onIncrement}
          // onDelete={props.onDelete}
          {...counter}
          {...rest}

        >
        </Counter>
      )) }
    </div>
  );
};

export default Counters;
