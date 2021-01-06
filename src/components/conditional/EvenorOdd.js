const EvenorOdd = (props) => {
  const isPar = props.number % 2 === 0;
  return (
    <>
    {
      isPar ? 
      <span>Par</span> : 
      <span>Ímpar</span> 
    }     

    </>
  )
}

export default EvenorOdd;