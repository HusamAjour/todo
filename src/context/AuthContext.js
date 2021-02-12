import React from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

const API = 'https://husam278-auth-server.herokuapp.com';

export const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      user: {},
      isValidAction: this.isValidAction,
    };
  }

  login = async (username, password) => {
    const encodedData = base64.encode(`${username}:${password}`);
    const result = await fetch(`${API}/signin`, {
      method: 'post',
      mode: 'cors',
      headers: { Authorization: `Basic ${encodedData}` },
    });

    let res = await result.json();
    this.validateToken(res.token);
  };

  validateToken = (token) => {
    console.log('in validateToken!');
    let user = jwt.decode(token);
    console.log('user > ', user);
    if (user) {
      this.setAuthState(true, token, user);
    }
  };

  setAuthState = (loggedIn, token, user) => {
    console.log('in setAuthState');
    cookie.save('auth', token);
    console.log('setAuthState user > ', user);
    this.setState({ loggedIn, user });
  };

  logout = () => {
    this.setAuthState(false, null, {});
  };

  isValidAction = (action) => {
    let caps = {
      user: ['read'],
      writer: ['read', 'create'],
      editor: ['read', 'create', 'update'],
      admin: ['read', 'create', 'update', 'delete'],
    };
    return caps[this.state.user.role].includes(action);
  };

  componentDidMount = () => {
    const userCookie = cookie.load('auth');
    console.log('userCookie >>> ', userCookie);
    this.validateToken(userCookie);
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
