import React, {cloneElement} from 'react';

const Family = (props) =>{
  return(
    <>
      {/* {cloneElement(props.children, props)} */} {/*apenas um elemento */}
      {
        props.children.map((child, i)=>{
          return cloneElement(child, {...props, key:i})
        })
      }
    </>
  );
}
export default Family;