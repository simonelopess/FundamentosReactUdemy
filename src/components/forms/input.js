import { useState } from 'react';

const Input = () => {

  const [value, setValue] = useState('Initial')

  const change = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="Input">
      <h2>{value}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <input value={value} onChange={change}></input>
        <input value={value} readOnly />
      </div>
    </div>
  )
}

export default Input;