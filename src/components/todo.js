import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Container, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap';
import useAjax from '../hooks/useAjax';
import Login from '../components/login';
import Auth from '../components/auth';

import './todo.scss';

const todoAPI = 'https://husam278-api-server.herokuapp.com/api/todo';

function ToDo(props) {
  const [list, setList] = useState([]);
  const [useAxios, response] = useAjax();

  // const itemCb = function(data) {
  //   setList(data);
  // }
  const _addItem = async (item) => {
    console.log('add item !!! , ', item);
    item = { ...item, complete: false };
    console.log(item);

    useAxios({
      method: 'post',
      url: todoAPI,
      data: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const _toggleComplete = async (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    item.complete = !item.complete;
    useAxios({
      method: 'put',
      url: `${todoAPI}/${id}`,
      data: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //   setRequestParams('post', null, JSON.stringify(item), id);
    //   let updatedItem = await useAxios();

    //   setList(
    //     list.map((listItem) =>
    //       updatedItem._id === listItem._id ? updatedItem : listItem
    //     )
    //   );

    // let url = `${todoAPI}/${item._id}`;
    // fetch(url, {
    //   method: 'put',
    //   mode: 'cors',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(item),
    // })
    //   .then((data) => data.json())
    //   .then((updatedItem) =>
    //     setList(
    //       list.map((listItem) =>
    //         updatedItem._id === listItem._id ? updatedItem : listItem
    //       )
    //     )
    //   )
    //   .catch(console.error);
  };

  const _deleteItem = (id) => {
    let url = `${todoAPI}/${id}`;
    useAxios({
      method: 'delete',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // fetch(url, {
    //   method: 'delete',
    //   mode: 'cors',
    // })
    //   .then((data) => data.json())
    //   .then((deleteddItem) => {
    //     let result = [];
    //     list.forEach((listItem) => {
    //       if (listItem._id !== deleteddItem._id) result.push(listItem);
    //     });
    //     setList(result);
    //   })
    //   .catch(console.error);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _getTodoItems = () => {
    useAxios({
      url: todoAPI,
    });
  };

  useEffect(() => {
    console.log('in use effect !!');
    if (response.result) {
      console.log('useEffect @@@@@@@response.results@@@@');
      setList(response.result);
    } else {
      console.log('useEffect in the else part!! ');
      _getTodoItems();
    }
  }, [_getTodoItems, response.result]);
  // useEffect(_getTodoItems, []);

  return (
    <React.Fragment>
      <Navbar bg="primary" variant="light" sticky="top">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Login />
      </Navbar>

        <section className="todo">
        <Container>
        <Auth action="read">

          <Row>
            <Col>
              <Alert className="black-alert">
                <h4>
                  There are {list.filter((item) => !item.complete).length} Items
                  To Complete
                </h4>
              </Alert>
            </Col>
          </Row>
          </Auth>
          <Row>
          <Auth action="create">
            <Col md="4">
              <div>
                <TodoForm handleSubmit={_addItem} />
              </div>
            </Col>
            </Auth>
            <Auth action="read">
            <Col md="8">
              <div>
                <TodoList
                  list={list}
                  handleComplete={_toggleComplete}
                  handleDelete={_deleteItem}
                />
              </div>
            </Col>
            </Auth>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default ToDo;
