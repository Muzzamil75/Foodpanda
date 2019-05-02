import React, { Component } from 'react';
import '../App.css';
import Cards from './cards';
import AvatarC from './avatar';
import TableC from './table';
class Dashboard extends Component {
  render() {
    return (
      <div style={{ margin: 20,backgroundColor :'#D70F64' }}>
        <div style={{ }}>
          <span className="tt" >Dashboard</span>
          <div style={{ display: 'flex', marginRight: 20, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <AvatarC />
          </div>

          <Cards />
          <TableC />

        </div>


      </div>


    )
  }
}

export default Dashboard;