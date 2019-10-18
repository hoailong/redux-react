import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import store from './store'; 

import Posts from './components/Posts'
import PostForm from './components/PostForm'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Redux - React
          </p>
        </header>
        <PostForm/>
        <hr/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
