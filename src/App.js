import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth, Analytics } from 'aws-amplify';
import awsconfig from './aws-exports'; //analytics
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
Amplify.configure(awsconfig);//analytics


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>CloudTrail Test and Notification Test v4</p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
