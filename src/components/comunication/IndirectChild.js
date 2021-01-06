const IndirectChild = (props) => {

  return (
    <div>
       <div>FIlho</div>
       <button onClick={()=>props.click('João', 18, true)}>Fornecer Informações</button>
    </div>
  )
}

export default IndirectChild;