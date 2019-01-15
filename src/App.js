import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {this.props.children}
        </div>
    );
  }
}

export default App;

