import React, { Component } from 'react';
import '../App.css';
import Cards from './cards';
import AvatarC from './avatar';
class Dashboard extends Component {
  render() {
    return (
      <div style={{height : '400px'}}>
      Dashboard
      <div style ={{display:'flex' , flexDirection :'row', justifyContent :'flex-end' }}>
        <AvatarC />
      </div>
      
       <Cards />
      </div>

    )
  }
}

export default Dashboard;