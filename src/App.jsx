import React from 'react'

export default function App() {
  const students = [
    { id: 1, name: "Nishant", course: "React", email: "nishant@gmail.com" },
    { id: 2, name: "shree", course: "java", email: "shree@gmail.com" },
    { id: 3, name: "kumar", course: "js", email: "kumar@gmail.com" },
    { id: 4, name: "nishu", course: "MongoDB", email: "nishu@gmail.com" },
    { id: 5, name: "Ramesh", course: "Datascience", email: "ramesh@gmail.com" },
    { id: 6, name: "Mahesh", course: "Html", email: "mahesh@gmail.com" },

  ];
  return (
    <>

      <div className='container mt-5'>
        <h3 className='text-center bg-primary text-white '>Student Information</h3>
        <table className='table table-hover table-bordered w-25'>
          <thead className='table-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Course</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.email}</td>
                </tr>
              )
              )
            }
            
      
          </tbody>
        </table>


      </div>
    </>
  )
}
