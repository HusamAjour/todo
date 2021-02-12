import ToDo from './components/todo.js';
import './App.scss';
import React from 'react';
import Login from './components/login';
import Auth from './components/auth';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ToDo />
    </AuthProvider>
  );
}

export default App;
