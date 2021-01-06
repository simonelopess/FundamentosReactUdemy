const DirectChild = (props) => {
  return (
    <div>
      <span>{props.text} </span>
      <span>{props.number} </span>
      <span>{props.nerd ? 'Nerd' : 'Lerdão'}</span>
    </div>
  )
}

export default DirectChild;