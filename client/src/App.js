import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  addUser(){
    axios.get('/api/users')
    .then( response =>{
      console.log(response.data)
    }).catch(()=>{
      console.log('crap')
    })
  }


  render(){
  return (
    <div className="App">
        <button
          onClick={()=> this.addUser()}
        >
          Add user
        </button>
    </div>
  )
}
}

export default App;
