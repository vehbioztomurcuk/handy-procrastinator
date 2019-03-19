import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header.js';
import {Content} from './components/Content.js';



export class App extends Component {
  render() {
    return (
      <div className="container">
              
              <Content className="content" />
        <div className="row">

        </div>
      </div>


    );
  }
}

export default App;

