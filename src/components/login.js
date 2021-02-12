import React from 'react';
import { AuthContext } from '../context/AuthContext';
import Show from './show.js';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

class Login extends React.Component {
  static contextType = AuthContext; // I have access to this.context

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    // from the context do login
    console.log('this context----> ', this.context);
    this.context.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <>
        <Show condition={this.context.loggedIn}>
        <Button variant="danger" onClick={this.context.logout}>
        Logout
            </Button>
        </Show>
        <Show condition={!this.context.loggedIn}>
          <Form inline onSubmit={this.handleSubmit}>
            <InputGroup>
              <FormControl
                name="username"
                placeholder="Username"
                aria-label="Username"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />
            </InputGroup>
            <Button variant="dark" type="submit">
              Login
            </Button>
          </Form>
        </Show>
      </>
    );
  }
}

export default Login;
