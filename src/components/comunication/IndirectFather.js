import IndirectChild from './IndirectChild';

const IndirectFather = (props) => {

  //nome idade nerd

  function getInformations(name, age, isNerd) {
    console.log(name, age, isNerd);
  }

  return (
    <div>
      Pai
      <IndirectChild click={getInformations}/>
    </div>
  )
}

export default IndirectFather;