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
  const handleDelete =(counterId)=>{
    console.log('handleDelete id=',counterId)
    const newCounters=counters.filter((el)=>el.id!==counterId)
    setCounters(newCounters)
  }
  return (
    <div>
      { counters.map(counter => (
        <Counter key={ counter.id }
                 value={ counter.value }
                 name={ counter.name }
                 onDelete={handleDelete}
                 id = {counter.id}  //key is not a props
        >
        </Counter>
      )) }
    </div>
  );
};

export default Counters;
