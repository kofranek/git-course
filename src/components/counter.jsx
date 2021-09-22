import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const formCount = () => {
    return count === 0 ? 'Nula' : count
  }

  const getBadgeClasses = () => {
    let classes = 'bagde m-2 bg-'
    classes += count === 0 ? 'danger' : 'primary'
    return classes
  }

  const tags = ['tag1', 'tag2', 'tag3']

  const renderTags = () => {
    if (tags.length === 0) {
      return 'No items'
    } else {
      return tags.map(el => <li key={el}>{el}</li>)
    }
  }

  const handleIncrement = product => {
    console.log('product=', product)
    setCount(count + 1)
  }

  return (
    <>
      {renderTags()}
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1, color: 'green' })}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
    </>
  )
}

export default Counter
