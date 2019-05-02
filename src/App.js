import React, { Component } from 'react';
import './App.css';
import Header from './Header/header';
import TableC from './Dashboard/table'
import Dashboard from './Dashboard/dashboard';
class App extends Component {
  render() {
    return (
      <div >
         <Header />
<div>
<img style={{height :'660px', width : '100%'}} src={require('./hacker.jpg')} />
</div>
        <Dashboard />
      </div>

    )
  }
}

export default App;