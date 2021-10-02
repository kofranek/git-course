import React, { useState } from 'react'
import Counters from './components/counters';
import NavBar from './components/navBar';

function App () {
  const initialState = [
    { value: 0, id: 1, name: 'Ложка', nameCzech: 'Lžička' },
    { value: 5, id: 2, name: 'Вилка', nameCzech: 'Vidlička' },
    { value: 0, id: 3, name: 'Тарелка', nameCzech: 'Talíř' },
    { value: 0, id: 4, name: 'Стартовый набор минималиста', nameCzech: 'Minimalistická startovací sada' },
    { value: 0, id: 5, name: 'Ненужные вещи', nameCzech: 'Nepotřebné věci' },
  ]
  const [counters, setCounters] = useState(initialState)
  const handleReset = () => {
    console.log('volám setCounters(initialState)')
    setCounters(initialState)
  }

  const handleIncrement = (counterId) => {
    console.log('handleIncrement id=', counterId)
    const newCounters = [...counters]
    const counterIndex = newCounters.findIndex(el => el.id === counterId)
    newCounters[counterIndex].value++
    setCounters(newCounters)
  }
  const handleDecrement = (counterId) => {
    console.log('handleDecrement id=', counterId)
    const newCounters = [...counters]
    const counterIndex = newCounters.findIndex(el => el.id === counterId)
    console.log('handleDecrement newCounters[counterIndex].value', newCounters[counterIndex].value)
    newCounters[counterIndex].value-- //if value===0, decrement button is hidden
    setCounters(newCounters)
  }
  const handleDelete = (counterId) => {
    console.log('handleDelete id=', counterId)
    const newCounters = counters.filter((el) => el.id !== counterId)
    setCounters(newCounters)
  }
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a,c)=>a+c.value,0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
