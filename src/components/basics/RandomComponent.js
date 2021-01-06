const RandomComponent = (props) => {

  const {min, max} = props;
  const numero = parseInt(Math.random() * (max - min) + min);
  return(
    <div>
        {numero}
    </div>
  )
}

export default RandomComponent;