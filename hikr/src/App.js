import React, { Component } from 'react';
import './App.css';
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
//import Bear from './models/bear.js';
import mongoose from 'mongoose';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https:www.thepagemagazine.com/wp-content/uploads/2017/11/hiking.jpg" alt="logo" />
          <h1 className="App-title">Hikr</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;