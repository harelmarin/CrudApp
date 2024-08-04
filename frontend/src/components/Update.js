import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UpdateStudent() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8001/update/'+id, {name, mail }) 
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='container-global'>
      <div className='container-create'>
        <h2>Update Student</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input 
              type='text' 
              className='form-control' 
              placeholder='Enter a name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className='form-group'>
            <label>Mail</label>
            <input 
              type='text' 
              className='form-control' 
              placeholder='Enter a mail' 
              value={mail} 
              onChange={(e) => setMail(e.target.value)} 
            />
          </div>
          <button type='submit'> Update </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
