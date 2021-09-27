import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {
  const [counters, setCounters] = useState(
    [
      { value: 0, id: 1, name: 'Ложка' },
      { value: 5, id: 2, name: 'Вилка' },
      { value: 0, id: 3, name: 'Тарелка' },
      { value: 0, id: 4, name: 'Стартовый набор минималиста' },
      { value: 0, id: 5, name: 'Ненужные вещи' },
    ])
  return (
    <div>
      { counters.map(counter => (
        <Counter key={ counter.count }
                 value={ counter.value }
                 name={ counter.name }
        >
        </Counter>
      )) }
    </div>
  );
};

export default Counters;
