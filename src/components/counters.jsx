import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {
  const [counters, setCounters] = useState([{ value: 0, id: 1 }, { value: 0, id: 2 }, { value: 0, id: 3 }])
  return (
    <div>
      { counters.map(counter => <Counter key={ counter.count }/>) }
    </div>
  );
};

export default Counters;
