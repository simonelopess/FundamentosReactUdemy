import React, { useState } from 'react';
import './Lotto.css';

const Lotto = (props) => {

  //chamada recursiva - retornando numeros que não contem no array.
  function randomNumber(min, max, array) {
    const randomN = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(randomN) ? randomNumber(min, max, array) :
    randomN;
  }

  function getNumbers(qtde) {
    const numbers = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const newNumber = randomNumber(1, 60, nums)
        return [...nums, newNumber]
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numbers;
  }


  const [qtde, setqtde] = useState( props.qtde || 6);
  const [numbers, setNumbers] = useState(Array(qtde).fill(0));



  return (
    <div className="Lotto">
      <h3>Quantidade de Números</h3>
      <h3>{numbers.join(' ')}</h3>
      <div>
        <label>Qtde de Números</label>
        <input type="number" value={qtde} onChange={e => setqtde(+e.target.value)}/>
      </div>
      <button onClick={()=>setNumbers(getNumbers(qtde))}>Gerar Números</button>
    </div>
  )
}

export default Lotto;