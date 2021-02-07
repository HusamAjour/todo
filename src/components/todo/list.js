import React from 'react';
import { ListGroup } from 'react-bootstrap';

function TodoList(props) {
  const setVariation = (complete) => {
    return complete ? 'success' : 'danger';
  };
  return (
    <>
      <ListGroup>
        {props.list.map((item) => (
          <ListGroup.Item
            onClick={() => props.handleComplete(item._id)}
            action
            key={item._id}
            variant={setVariation(item.complete)}
          >
            {item.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default TodoList;

/*<ul>
        {props.list.map((item) => (
          <li className={`complete-${item.complete.toString()}`} key={item._id}>
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>*/
