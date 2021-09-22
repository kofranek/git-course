import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const formCount = () => {
    return count === 0 ? 'Ноль' : count
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

  const handleDecrement = productId => {
    //console.log('increment')
    if (count > 0) setCount(count - 1)
    console.log('productId=', productId)
  }

  return (
    <div>
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button
        hidden={count === 0}
        onClick={() => handleDecrement({ id: 1 })}
        className='btn btn-secondary btn-sm m-2'
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
