import students from '../../data/student';


const studentList =(props)=>{

  const student = students.map((student) =>{
    return(
      <li key={student.id}>{student.id} {student.nome} {student.nota}</li>
      )
  })
  return(
    <>
      <ul style={{listStyle: 'none'}}>
        {student}
      </ul>
    </>
  )
}

export default studentList;