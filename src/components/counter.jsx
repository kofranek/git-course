const Counter = ({id, value, name, nameCzech, onIncrement, onDecrement, onDelete }) => {
  //console.log('Counter props=',props)

  const formValue = () => {
    return value === 0 ? 'Ноль' : value
  }

  const getBadgeClasses = () => {
    let classes = 'bagde m-2 bg-'
    classes += value === 0 ? 'danger' : 'primary'
    return classes
  }

  return (
    <div>
      <h4>{name}</h4>
      <h4>{nameCzech}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={()=>onIncrement(id)}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button
        hidden={value === 0}
        onClick={() => onDecrement(id)}
        className='btn btn-secondary btn-sm m-2'
      >
        Decrement
      </button>
        <button className='btn btn-danger btn-sm m-2' onClick={()=>onDelete(id)}>Delete</button>
    </div>
  )
}

export default Counter
