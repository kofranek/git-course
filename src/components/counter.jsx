import React, { useState } from 'react'

const Counter = (props) => {
  console.log('props=',props)
  const [value, setValue  ] = useState(props.value) //props.counter.value

  const formValue = () => {
    return value === 0 ? 'Ноль' : value
  }

  const getBadgeClasses = () => {
    let classes = 'bagde m-2 bg-'
    classes += value === 0 ? 'danger' : 'primary'
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
    setValue(value + 1)
  }

  const handleDecrement = productId => {
    //console.log('increment')
    if (value > 0) setValue(value - 1)
    console.log('productId=', productId)
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button
        hidden={value === 0}
        onClick={() => handleDecrement({ id: 1 })}
        className='btn btn-secondary btn-sm m-2'
      >
        Decrement
      </button>
        <button className='btn btn-danger btn-sm m-2' onClick={()=>props.onDelete(props.id)}>Delete</button>
    </div>
  )
}

export default Counter
