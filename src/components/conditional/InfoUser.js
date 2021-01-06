import If from './If';

const InfoUser = (props) =>{
  const user = props.user || {}
  return(
    <div>
      <If test={user && user.name}>
        Seja bem vindo <strong>{user.name}</strong>
      </If>
    </div>
  )
}

export default InfoUser;