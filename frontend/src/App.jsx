import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <p>This is The Main Body !!!!!</p>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
