import MemberFamily from './MemberFamily';

const Family = (props) =>{
  return(
    <>
      <MemberFamily name="Pedro" surname={props.surname}/>
      <MemberFamily name="Ana" {...props}/>
      <MemberFamily name="Gustavo" surname="Silva"/>
    </>
  );
}
export default Family;