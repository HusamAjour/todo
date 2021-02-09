import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm.js';

function TodoForm(props) {
  const [item, setItem] = useState({});
  const [handleSubmit, handleChange] = useForm(getFromData);

  function getFromData(item){
    console.log('inside From component!');
    console.log(item);
    props.handleSubmit(item);
    setItem({});
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Add Item</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>To Do Item</Form.Label>
              <Form.Control
                type="text"
                name="text"
                placeholder="Add To Do List Item"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control
                type="text"
                name="assignee"
                placeholder="Assigned To"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicRangeCustom">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control
                defaultValue="1"
                type="range"
                min="1"
                max="5"
                name="difficulty"
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Add Item</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;