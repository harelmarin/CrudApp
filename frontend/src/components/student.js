import React, { useEffect, useState} from 'react';
import axios from 'axios';


function Student() {

  const [student, setStudent] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:8001/')
    .then(res => {
      setStudent(res.data);
      console.log('Data received:', res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className='container-global'>
      <div className='container'>
      <button className='add'> Add </button>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          {
          student.map((data, i) => (
            <tr className='container-ligne'key={i}>
              <td>{data.Name}</td>
              <td>{data.Mail}</td>
              <td className='container-edit'>
                <button className='edit'> Edit </button>
                <button className='delete'> Delete </button>
              </td>
            </tr>
          ))
          }
        </tbody>
        </table>
     </div>
    </div>
  );
}

export default Student;
