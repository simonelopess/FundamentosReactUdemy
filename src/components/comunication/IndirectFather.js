import {useState} from 'react';

import IndirectChild from './IndirectChild';

const IndirectFather = (props) => {

  const [name, setName] = useState('?');
  const [age, setAge] = useState(0);
  const [isNerd, setIsNerd] = useState(false);
  //nome idade nerd

  function getInformations(name, age, nerd) {
    setName(name)
    setAge(age)
    setIsNerd(nerd)
  }

  return (
    <div>
      <span>{name} </span>
      <span>{age} </span>
      <span>{isNerd ? 'Verdadeiro' : 'Falso'}</span>
      <IndirectChild click={getInformations}/>
    </div>
  )
}

export default IndirectFather;