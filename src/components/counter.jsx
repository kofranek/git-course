const Counter = (props) => {
  console.log('props=',props)

  const formValue = () => {
    return props.value === 0 ? 'Ноль' : props.value
  }

  const getBadgeClasses = () => {
    let classes = 'bagde m-2 bg-'
    classes += props.value === 0 ? 'danger' : 'primary'
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
  return (
    <div>
      <h4>{props.name}</h4>
      <h4>{props.nameCzech}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={()=>props.onIncrement(props.id)}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button
        hidden={props.value === 0}
        onClick={() => props.onDecrement(props.id)}
        className='btn btn-secondary btn-sm m-2'
      >
        Decrement
      </button>
        <button className='btn btn-danger btn-sm m-2' onClick={()=>props.onDelete(props.id)}>Delete</button>
    </div>
  )
}

export default Counter
