import React from 'react';

export default props => {
  return (
    <div>
      <label htmlFor="inputPass"></label>
      <input id="inputPass" type="number" value={this.state.pass} onChange={e => this.setPass(+e.target.value)} />
    </div>
  )
}