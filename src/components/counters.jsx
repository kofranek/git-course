import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {
  const [counters, setCounters] = useState(
    [
      { value: 0, id: 1, name: 'Ложка', nameCzech: 'Lžička'},
      { value: 5, id: 2, name: 'Вилка', nameCzech: 'Vidlička'},
      { value: 0, id: 3, name: 'Тарелка', nameCzech: 'Talíř' },
      { value: 0, id: 4, name: 'Стартовый набор минималиста', nameCzech: 'Minimalistická startovací sada' },
      { value: 0, id: 5, name: 'Ненужные вещи', nameCzech: 'Nepotřebné věci' },
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
                 /*
                 id = {counter.id}  //key is not a props
                 value={ counter.value }
                 name={ counter.name }
                  */
                 {...counter} //spread operator - allows you to add additional parameters
                 onDelete={handleDelete}
        >
        </Counter>
      )) }
    </div>
  );
};

export default Counters;
