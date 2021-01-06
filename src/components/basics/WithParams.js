export default function WithParams(props){

  const status = props.grade >= 7 ? 'Aprovado' : 'Reprovado'

  const nota = Math.ceil(props.grade);
  return (
    <div>
      <h2>{props.title} </h2>
      <p>{props.subtitle}</p>
      <p>{status}</p>
      <p>{nota}</p>
    </div>
  )
}