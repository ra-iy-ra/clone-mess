import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [day, setDay] = useState('');
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/create", { day, breakfast, lunch, dinner })
      .then((result) => {
        console.log(result);
        navigate("/menu");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='formDay'>
          <Form.Control type='text' placeholder='Enter Day' value={day} required onChange={(e) => setDay(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBreakfast'>
          <Form.Control type='text' placeholder='Enter Breakfast' value={breakfast} required onChange={(e) => setBreakfast(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formLunch'>
          <Form.Control type='text' placeholder='Enter Lunch' value={lunch} required onChange={(e) => setLunch(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formDinner'>
          <Form.Control type='text' placeholder='Enter Dinner' value={dinner} required onChange={(e) => setDinner(e.target.value)} />
        </Form.Group>
        <Button type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
      </Form>
    </div>
  );
};

export default Add;
