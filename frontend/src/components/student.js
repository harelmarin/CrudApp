import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8001/student/${id}`);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}

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
      <Link to='/create' className='add'> Add </Link>
      <table className='table'>
        <thead>
          <div className='container-head'>
          <tr>
            <th>Name</th>
            <th>Mail</th>
          </tr>
          </div>
        </thead>
        <tbody>
          {
          student.map((data, i) => (
            <tr className='container-ligne'key={i}>
              <div className='container-data'>
             <div className='cellule'> <td>{data.Name}</td> </div>
             <div className='cellule'><td>{data.Mail}</td> </div>
              </div>
            
              <td className='container-edit'>
                <Link to={`update/${data.ID}`}className='edit'> Edit </Link>
                <button className='delete' onClick={e => handleDelete(data.ID)}> Delete </button>
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
